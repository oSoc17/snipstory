import React from 'react';
import Button from '../button/Button';

const selectAnswer = (module, index, handleChange) => {
  handleChange(
    Object.assign({}, module, {
      answer: parseInt(index, 10)
    })
  );
};

const QuizModule = ({ module, handleChange, users }) => {
  return (
    <article className="module">
      <div className="container">
        {module.resources && <img src={module.resources[0]} alt="QuizImage" />}
        <p>
          {module.text}
        </p>

        <div className="question">
          {module.correction === module.answer
            ? <div>
                {module.correctMessage}
              </div>
            : <div className="question-text">
                <span className="questionmark">?</span>
                <span>
                  {module.question}
                </span>
              </div>}
          <div>
            {users[module.clickedBy]}
          </div>

          <div>
            {users[module.clickedBy]}
          </div>

          <div className="buttons">
            {module.options.map((option, i) => {
              if (
                module.answer === module.correction &&
                module.correction === i &&
                module.answer === i
              ) {
                return (
                  <Button
                    inverted
                    key={i}
                    onClick={_ => selectAnswer(module, i, handleChange)}
                    style={{ backgroundColor: 'green' }}
                  >
                    {option}
                  </Button>
                );
              } else if (module.correction !== i && module.answer === i) {
                return (
                  <Button
                    inverted
                    key={i}
                    onClick={_ => selectAnswer(module, i, handleChange)}
                    style={{ backgroundColor: 'red' }}
                  >
                    {option}
                  </Button>
                );
              } else {
                return (
                  <Button
                    inverted
                    key={i}
                    onClick={_ => selectAnswer(module, i, handleChange)}
                  >
                    {option}
                  </Button>
                );
              }
            })}
          </div>
        </div>
      </div>
    </article>
  );
};

export default QuizModule;
