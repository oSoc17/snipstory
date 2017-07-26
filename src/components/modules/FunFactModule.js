import React from 'react';
import './FunFactModule.css';

const FunFactModule = ({ module: { text } }) =>
  <article className="module">
    <div className="container funfact-container">
      <span className="fact-title">Weetje!</span>
      <p className="fact-text">
        {text}
      </p>
    </div>
  </article>;
export default FunFactModule;
