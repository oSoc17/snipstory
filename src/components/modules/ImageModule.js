import React from 'react';

export const ImageModule = ({ resources, text }) =>
  <div>
    <figure>
      <img src={resources[0]} />
      <figcaption>
        {text}
      </figcaption>
    </figure>
  </div>;
