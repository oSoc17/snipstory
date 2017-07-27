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
      <div className="question-picture-container ">
        {module.resources &&
          <div
            style={{
              backgroundImage: `url(${module.resources[0]})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }}
            className="img-mask"
          />}
        <p className="quiz-text">
          {module.text}
        </p>
      </div>
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
      <svg width="0" height="0">
        <defs>
          <clipPath id="myClip">
            <path
              className="path-border"
              d="M228.8,4.5c33.7-9.8,69.6,1,103,11.7c41.9,13.4,98,29.5,127.2,63.2c18.2,19.7,36.7,40.2,48.7,64.2
				c12,24,17,52.8,7.2,77.7c-7.3,18.5-21.9,33.3-30.2,51.4c-8.8,19.2-9.8,53-13.5,73.8c-3.7,20.8-11.3,42.7-28.7,54.7
				c-21.4,14.8-50.5,10.1-75.1,1.7c-24.6-8.4-49.5-20-75.4-17.2c-26.1,2.8-49.6,20.1-75.9,20.2c-19.7,0.1-38-9.5-55.1-19.1
				c-19.3-10.8-39.8-23.6-47.5-44.3c-10.5-28.3,6.9-70.8,25.6-94.5s40.5-48.8,40.2-78.9c-0.2-19.7-10.1-37.9-14-57.1
				C156.2,67,185,17.2,228.8,4.5z"
            />
          </clipPath>
        </defs>
      </svg>
    </article>
  );
};

export default QuizModule;
