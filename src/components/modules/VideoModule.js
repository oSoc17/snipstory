import React from 'react';

const VideoModule = ({ module: { resources } }) =>
  <video controls>
    <source src={resources[0]} />
  </video>;

export default VideoModule;
