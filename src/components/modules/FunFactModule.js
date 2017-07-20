import React from 'react';

const FunFactModule = ({ module: { text } }) =>
  <article className="container module">
    <span>Weetje!</span>
    <p>
      {text}
    </p>
  </article>;
export default FunFactModule;
