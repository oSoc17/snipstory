import React from 'react';
import Button from '../button/Button';

const selectAnswer = (module, index, handleChange) => {
  handleChange(
    Object.assign({}, module, {
      answer: parseInt(index, 10)
    })
  );
};

const QuizModule = ({ module, handleChange }) => {
  const confirmAnswer = module.answer === module.correction;

  return (
    <div>
      <span>Hello QuizModule</span>
      {module.resources && <img src={module.resources[0]} alt="QuizImage" />}
      <p>
        {module.text}
      </p>
      {module.options.map((option, i) =>
        <Button key={i} onClick={_ => selectAnswer(module, i, handleChange)}>
          {option.value}
        </Button>
      )}
    </div>
  );
};

export default QuizModule;
