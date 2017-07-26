import React from 'react';

const TextblockModule = ({ module: { resources, text } }) =>
  <article className="container module article-centering">
    <img
      className="img-fluid img-mask"
      src={resources[0]}
      alt="TextBlockImage"
    />
    <div className="module-text text-centering">
      <p>
        {text}
      </p>
    </div>
  </article>;
export default TextblockModule;
