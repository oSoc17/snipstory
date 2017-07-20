import React from 'react';

const ImageModule = ({ module: { resources, text } }) =>
  <article className="container module">
    <figure>
      <img alt={text.substring(0, 10)} src={resources[0]} />
      <figcaption>
        {text}
      </figcaption>
    </figure>
  </article>;
export default ImageModule;
