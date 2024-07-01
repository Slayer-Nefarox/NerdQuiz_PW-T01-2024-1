import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Quiz() {
  const [questionData, setQuestionData] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    // Carrega a pergunta a partir da API usando Axios
    axios.get('https://quizapi.io/api/v1/questions?apiKey=zSjPnyMpaZsV6ToEKDfQsBJ4sDXRp7rNQdkWyRb5')
      .then(response => {
        if (response.data.length > 0) {
          setQuestionData(response.data[0]);
        }
      })
      .catch(error => console.error('Erro ao carregar a pergunta:', error));
  }, []);

  const handleAnswerClick = (answerKey) => {
    setSelectedAnswer(answerKey);
  };

  const isAnswerCorrect = (answerKey) => {
    return questionData.correct_answers[`${answerKey}_correct`] === 'true';
  };

  const getAnswerClassName = (answerKey) => {
    if (selectedAnswer === answerKey) {
      return isAnswerCorrect(answerKey) ? 'neon alt correct' : 'neon alt incorrect';
    }
    return 'neon alt';
  };

  if (!questionData) {
    return <div className='neon center'>Loading...</div>;
  }

  return (
    <div className="neon center">
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
                  className={getAnswerClassName(answerKey)}
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
                  className={getAnswerClassName(answerKey)}
                  onClick={() => handleAnswerClick(answerKey)}
                >
                  {questionData.answers[answerKey]}
                </button>
              )
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
