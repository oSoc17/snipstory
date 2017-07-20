import React from 'react';

const ImageThumbnail = ({ imageSource = 'placeholder', ...props }) => {
  const styles = {
    display: 'inline-block',
    width: '10em',
    height: '10em',
    margin: '0 1em',
    backgroundImage: 'url(' + imageSource + ')',
    backgroundSize: 'cover'
  };

  return <div className="rounded-circle" style={styles} {...props} />;
};

export default ImageThumbnail;
