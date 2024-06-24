import React, { useState, useEffect } from 'react';

export default function Quiz() {
  const [questionData, setQuestionData] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    // Carregue a pergunta a partir da API
    fetch('https://quizapi.io/api/v1/questions?apiKey=zSjPnyMpaZsV6ToEKDfQsBJ4sDXRp7rNQdkWyRb5')
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          setQuestionData(data[0]); // Assumindo que a API retorna uma lista e pegamos a primeira pergunta
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
    return <div>Loading...</div>;
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
