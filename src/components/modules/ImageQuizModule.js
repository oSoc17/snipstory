import React from 'react';
import ImageThumbnail from '../../components/imagethumbnail/ImageThumbnail';

const selectAnswer = (event, module, handleChange) => {
  handleChange(
    Object.assign({}, module, {
      answer: parseInt(event.target.id, 10)
    })
  );
};

const ImageQuizModule = ({ module, handleChange }) => {
  return (
    <article className="container module">
      <p className="module-text">
        {module.text}
      </p>

      <div>
        <span>Welke foto past het best bij het verhaal volgens jullie?</span>
        <img src="" alt="Placeholder or selected" />
      </div>

      <div className="images">
        <div>
          {module.resources.map((resource, i) =>
            <ImageThumbnail
              id={i}
              key={i}
              imageSource={resource}
              onClick={e => {
                selectAnswer(e, module, handleChange);
              }}
            />
          )}
        </div>
      </div>
    </article>
  );
};
export default ImageQuizModule;
