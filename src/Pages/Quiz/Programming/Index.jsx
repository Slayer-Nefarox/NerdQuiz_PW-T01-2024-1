import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth, db } from '../../../services/firebaseConnection';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

export default function Programming() {
    // Estados para armazenar dados do quiz
    const [questions, setQuestions] = useState([]); // Armazena as perguntas obtidas da API
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Índice da pergunta atual
    const [selectedAnswer, setSelectedAnswer] = useState(null); // Resposta selecionada pelo usuário
    const [scores, setScores] = useState(Array(5).fill(2)); // Pontuações das respostas, inicializadas com 1
    const [loading, setLoading] = useState(true); // Estado de carregamento
    const [user, setUser] = useState(null); // Informações do usuário autenticado
    const navigate = useNavigate(); // Função para navegação entre rotas
  
    const category = 'Code'; // Categoria do quiz (pode ser ajustada conforme necessário)
  
    useEffect(() => {
      // Função para buscar perguntas da API ao carregar o componente
      axios.get('https://quizapi.io/api/v1/questions', {
        params: {
          apiKey: 'zSjPnyMpaZsV6ToEKDfQsBJ4sDXRp7rNQdkWyRb5',
          limit: 5,
          category: category,
        },
      })
        .then(response => {
          console.log('API Response:', response.data); // Log para depuração
          if (response.data.length > 0) {
            setQuestions(response.data); // Define as perguntas recebidas do servidor
            setLoading(false); // Altera o estado de carregamento para falso
          } 
          else 
          {
            throw new Error('Nenhuma pergunta encontrada para esta categoria.');
          }
        })
        .catch(error => {
          console.error('Erro ao carregar as perguntas:', error); // Tratamento de erro
          setLoading(false); // Altera o estado de carregamento para falso
        });
    }, []);
  
    useEffect(() => {
      // Efeito para escutar mudanças no estado de autenticação do usuário
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser); // Define o usuário atual
      });
      // Função de limpeza para desinscrever do listener ao desmontar o componente
      return () => unsubscribe();
    }, []);
    // Função para lidar com o clique nas respostas das perguntas
    const handleAnswerClick = (answerKey) => { 
      const correct = isAnswerCorrect(answerKey); // Verifica se a resposta selecionada está correta
      setSelectedAnswer(answerKey); // Define a resposta selecionada pelo usuário
      const newScores = [...scores]; // Cria uma cópia do array de pontuações
      if (correct) 
      {
        toast(`Right answer! You got: ${newScores[currentQuestionIndex]} point(s)!`); 
        if (currentQuestionIndex < 4) 
        {
          setTimeout(() => {
           
            setSelectedAnswer(null); // Limpa a resposta selecionada
            setCurrentQuestionIndex(prevIndex => prevIndex + 1); // Avança para a próxima pergunta
          }, 1000); // Delay de 1 segundo antes de avançar
        } 
        else 
        {
          toast(`Quiz concluded! Your score is: ${scores.reduce((a, b) => a + b, 0)}`); // Exibe a pontuação final para o usuário
          setTimeout(() => {
            calculateAndSaveScore(); // Calcula e salva a pontuação final se todas as perguntas foram respondidas
          }, 7000); // Delay de 1 segundo antes de calcular a pontuação final
        }
      } 
      else 
      {
        newScores[currentQuestionIndex] /= 2; // Divide a pontuação pela metade se a resposta estiver incorreta
        toast('Wrong answer! Try again!'); // Exibe uma mensagem de erro para o usuário
      }
      setScores(prevScores => newScores);
      console.log(scores);
    };
  
    // Função para verificar se a resposta selecionada pelo usuário está correta
    const isAnswerCorrect = (answerKey) => {
      return questions[currentQuestionIndex].correct_answers[`${answerKey}_correct`] === 'true';
    };
  
    // Função para calcular a pontuação final e salvar no Firebase
    const calculateAndSaveScore = async () => {
      const totalScore = scores.reduce((a, b) => a + b, 0); // Calcula a pontuação total
      const averageScore = totalScore;
      
      if (user) 
      { // Verifica se o usuário está autenticado
        const userId = user.uid; // Obtém o ID do usuário
        const themeScoreField = `score_${category.toLowerCase()}`; // Campo no documento do usuário para armazenar a pontuação
        const userRef = doc(db, 'users', userId); // Referência ao documento do usuário no Firebase
        
        try {
          const docSnap = await getDoc(userRef); // Obtém o documento do usuário
          if (docSnap.exists()) {
            const previousScore = docSnap.data()[themeScoreField] || 0; // Obtém a pontuação anterior do tema
            const newAverageScore = previousScore ? (previousScore + averageScore) / 2 : averageScore; // Calcula a nova pontuação média
            await updateDoc(userRef, { [themeScoreField]: newAverageScore }); // Atualiza a pontuação do usuário no Firebase
          } else {
            await setDoc(userRef, { [themeScoreField]: averageScore }); // Define a pontuação inicial do usuário no Firebase
          }
        } 
        catch (error) 
        {
          console.error('Erro ao salvar o resultado no Firebase:', error); // Tratamento de erro ao salvar no Firebase
        } 
        finally 
        {
          navigate('/programming_score'); // Redireciona para a página de resultados após concluir o quiz
        }
      } 
      else 
      {
        navigate('/'); // Redireciona para a página de inicial se o usuário não estiver autenticado
      }
    };
  
    // Renderiza mensagem de carregamento enquanto busca as perguntas
    if (loading) {
      return <div className='neon center'>Loading...</div>;
    }
  
    // Renderiza mensagem se não houver perguntas disponíveis
    if (!questions.length) {
      return <div className='neon center'>Nenhuma pergunta disponível.</div>;
    }
  
    const questionData = questions[currentQuestionIndex]; // Dados da pergunta atual
  
  

  return (
    <div className="neon center">
      <ToastContainer />
      <div className="quiz">
        <div className="questions">
          <h2>{questionData.question}</h2>
        </div>
        <div className="neon questions">
          <div className="question_row">
            {['answer_a', 'answer_b'].map((answerKey) => (
              questionData.answers[answerKey] && (
                <button
                  key={answerKey}
                  type="button"
                  className={selectedAnswer === answerKey ? (isAnswerCorrect(answerKey) ? 'neon alt correct' : 'neon alt incorrect') : 'neon alt'}
                  onClick={() => handleAnswerClick(answerKey)}
                >
                  {questionData.answers[answerKey]}
                </button>
              )
            ))}
          </div>
          <div className="question_row">
            {['answer_c', 'answer_d'].map((answerKey) => (
              questionData.answers[answerKey] && (
                <button
                  key={answerKey}
                  type="button"
                  className={selectedAnswer === answerKey ? (isAnswerCorrect(answerKey) ? 'neon alt correct' : 'neon alt incorrect') : 'neon alt'}
                  onClick={() => handleAnswerClick(answerKey)}
                >
                  {questionData.answers[answerKey]}
                </button>
              )
            ))}
          </div>
        </div>
        <div className="neon score">
          <p>Question {currentQuestionIndex + 1} of 5, worth {scores[currentQuestionIndex]} points.</p>
        </div>
      </div>
    </div>
  );
}
