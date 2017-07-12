import React from 'react';

export const VideoModule = ({ module: { resources } }) =>
  <video controls>
    <source src={resources[0]} />
  </video>;
