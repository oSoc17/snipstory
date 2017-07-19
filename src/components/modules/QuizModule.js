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
  return (
    <article className="container module">
      {module.resources && <img src={module.resources[0]} alt="QuizImage" />}
      <p>
        {module.text}
      </p>

      <div className="question">
        <span className="questionmark">?</span>
        <span>
          {module.question}
        </span>

        <div className="buttons">
          {module.options.map((option, i) =>
            <Button
              key={i}
              onClick={_ => selectAnswer(module, i, handleChange)}
            >
              {option}
            </Button>
          )}
        </div>
      </div>
    </article>
  );
};

export default QuizModule;
