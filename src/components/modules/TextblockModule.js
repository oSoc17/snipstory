import React from 'react';

const TextblockModule = ({ module: { resources, text } }) =>
  <article className="container module article-centering">
    <div
      style={{
        backgroundImage: `url(${resources[0]})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
      className="img-mask"
    />
    <div className="module-text text-centering">
      <p>
        {text}
      </p>
    </div>
  </article>;
export default TextblockModule;
