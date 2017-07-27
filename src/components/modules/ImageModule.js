import React from 'react';

const ImageModule = ({ module: { resources, text } }) =>
  <article className="container module">
    <figure>
      <div
        style={{
          backgroundImage: `url(${resources[0]})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
        className="img-mask"
      />
      <figcaption>
        {text}
      </figcaption>
    </figure>
  </article>;
export default ImageModule;
