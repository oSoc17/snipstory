import React from 'react';

export const TextblockModule = ({ module: { resources, text } }) =>
  <div>
    <img src={resources[0]} alt="TextBlockImage" />
    <div>
      <p>
        {text}
      </p>
    </div>
  </div>;
