import React from 'react';
import { Check } from 'react-feather';
import Button from '../button/Button';
import './QuizModule.css';

const selectAnswer = (module, index, handleChange) => {
  handleChange(
    Object.assign({}, module, {
      answer: parseInt(index, 10)
    })
  );
};

const QuizModule = ({ module, handleChange, users }) => {
  const isCorrectAnswerChosen = module.correction === module.answer;
  const isWrongAnswerChosen =
    module.answer !== undefined && module.correction !== module.answer;
  return (
    <article className="container module module--quiz">
      {module.resources && <img src={module.resources[0]} alt="QuizImage" />}
      <p>
        {module.text}
      </p>

      <div className="question">
        {isCorrectAnswerChosen &&
          <div className="question__notification question__notification--right">
            Juist!
          </div>}
        {isWrongAnswerChosen &&
          <div className="question__notification question__notification--wrong">
            Oeps! Probeer het nog eens.
          </div>}
        {isCorrectAnswerChosen
          ? <div className="question__body row">
              <div className="question__correct">
                {module.correctMessage}
              </div>
            </div>
          : <div className="question__body row">
              <div className="question__mark col-md-2">?</div>
              <div className="question__text col-md-10">
                {module.question}
              </div>
            </div>}
        {module.clickedBy &&
          users[module.clickedBy] &&
          users[module.clickedBy].trim().length > 0 &&
          isCorrectAnswerChosen &&
          <div className="question__answer--correct">
            <div className="question__answer--correct__inner" />
            <div className="question__answered-by">
              <div className="question__answered-by__icon">
                <Check size={16} />
              </div>
              <div className="question__answered-by__text">
                Opgelost door {users[module.clickedBy]}
              </div>
            </div>
          </div>}
        {isCorrectAnswerChosen
          ? <div className="question__answers">
              <Button
                size="small"
                style={{ borderRadius: '1rem' }}
                inverted
                className="question__answer question__answer--right"
                onClick={() => null}
              >
                {module.options[module.answer]}
              </Button>
            </div>
          : <div className="question__answers">
              {module.options.map((option, i) => {
                const isWrongAnswerSelected =
                  module.answer === i && isWrongAnswerChosen;
                return (
                  <Button
                    size="small"
                    style={{ borderRadius: '1rem' }}
                    inverted
                    className={`question__answer${isWrongAnswerSelected
                      ? ' question__answer--wrong'
                      : ''}`}
                    key={i}
                    onClick={_ => selectAnswer(module, i, handleChange)}
                  >
                    {option}
                  </Button>
                );
              })}
            </div>}
      </div>
    </article>
  );
};

export default QuizModule;
