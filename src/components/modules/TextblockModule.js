import React from 'react';

export const TextblockModule = ({ resources, text }) =>
  <div>
    <img src={resources[0]} alt="TextBlockImage" />
    <div>
      <p>
        {text}
      </p>
    </div>
  </div>;
