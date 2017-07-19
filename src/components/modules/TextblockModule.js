import React from 'react';

const TextblockModule = ({ module: { resources, text } }) =>
  <article className="container module">
    <img src={resources[0]} alt="TextBlockImage" />
    <div>
      <p>
        {text}
      </p>
    </div>
  </article>;
export default TextblockModule;
