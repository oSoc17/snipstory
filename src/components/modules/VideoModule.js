import React from 'react';

const VideoModule = ({ module: { resources } }) =>
  <article className="container module">
    <video controls>
      <source src={resources[0]} />
    </video>
  </article>;

export default VideoModule;
