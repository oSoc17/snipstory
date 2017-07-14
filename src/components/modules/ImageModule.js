import React from 'react';

const ImageModule = ({ module: { resources, text } }) =>
  <div>
    <figure>
      <img alt={text.substring(0, 10)} src={resources[0]} />
      <figcaption>
        {text}
      </figcaption>
    </figure>
  </div>;
export default ImageModule;
