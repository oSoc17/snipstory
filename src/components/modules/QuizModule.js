import React from 'react';

const selectAnswer = (e, module, handleChange) => {
  handleChange(
    Object.assign({}, module, {
      answer: parseInt(e.target.id, 10)
    })
  );
};

const QuizModule = ({ module, handleChange }) => {
  const confirmAnswer = module.answer === module.correction;

  return (
    <div>
      {module.resources && <img src={module.resources[0]} alt="QuizImage" />}
      <p>
        {module.text}
      </p>
      <div>
        <button value="Y" onClick={e => selectAnswer(e, module, handleChange)}>
          Yes
        </button>
        <button value="N" onClick={e => selectAnswer(e, module, handleChange)}>
          No
        </button>
      </div>
    </div>
  );
};

export default QuizModule;
