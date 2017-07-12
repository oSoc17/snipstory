import React from 'react';
import YouTube from 'react-youtube';

const parseUrl = youtubeUrl => {
  const shortHand = 'youtu.be';
  let urlParts;
  if (youtubeUrl.indexOf(shortHand) !== -1) {
    urlParts = youtubeUrl.split('youtu.be/');
  } else {
    urlParts = youtubeUrl.split('watch?v=');
  }
  if (urlParts.length > 0) {
    return urlParts[1];
  }
};

const YoutubeModule = ({ module: { resources } }) => {
  const opts = { playerVars: { autoplay: 0 } };
  return <YouTube videoId={parseUrl(resources[0])} opts={opts} />;
};

export default YoutubeModule;
