import React from 'react';

export const VideoModule = ({ resources }) =>
  <video controls>
    <source src={resources[0]} />
  </video>;