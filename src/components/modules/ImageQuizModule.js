import React from 'react';

const selectAnswer = (event, module, handleChange) => {
  handleChange(
    Object.assign({}, module, {
      answer: parseInt(event.target.id, 10)
    })
  );
};

const ImageQuizModule = ({ module, handleChange }) => {
  // const confirmAnswer = module.answer === module.correction;
  return (
    <div>
      <p>
        {module.text}
      </p>
      <div className="images">
        <div>
          {module.resources.map((resource, i) =>
            <img
              className="image"
              key={i}
              id={i}
              src={resource}
              onClick={e => {
                selectAnswer(e, module, handleChange);
              }}
              alt={'ImageQuiz' + i}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default ImageQuizModule;
