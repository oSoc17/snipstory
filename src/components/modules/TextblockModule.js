import React from 'react';

const TextblockModule = ({ module: { resources, text } }) =>
  <div>
    <img src={resources[0]} alt="TextBlockImage" />
    <div>
      <p>
        {text}
      </p>
    </div>
  </div>;
export default TextblockModule;