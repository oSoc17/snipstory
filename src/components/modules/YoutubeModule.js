import React from 'react';
import YouTube from 'react-youtube';

class YoutubeModule extends React.Component {
  render() {
    const opts = { playerVars: { autoplay: 0 } };
    return (
      <YouTube videoId={this.parseUrl(this.props.resources[0])} opts={opts} />
    );
  }

  parseUrl(youtubeUrl) {
    console.log('Youtube Url:', youtubeUrl);
    const shortHand = 'youtu.be';
    let urlParts;
    if (youtubeUrl.indexOf(shortHand) !== -1) {
      urlParts = youtubeUrl.split('youtu.be/');
      console.log('url parts:', urlParts);
    } else {
      urlParts = youtubeUrl.split('watch?v=');
      console.log('url parts:', urlParts);
    }
    if (urlParts.length > 0) {
      return urlParts[1];
    }
  }
}

export default YoutubeModule;
