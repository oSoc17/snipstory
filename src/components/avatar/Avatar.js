import React from 'react';
import { SIZES } from '../../constants';
import './Avatar.css';
import { User } from 'react-feather';

const Avatar = ({ size = SIZES.MEDIUM, children, src, alt = '', ...props }) => {
  const classes = ['avatar', `avatar--${size}`];

  if (!src) {
    return (
      <div className={classes.join(' ')}>
        <User size="100%" />
      </div>
    );
  }

  return <img className={classes.join(' ')} src={src} alt={alt} {...props} />;
};

export default Avatar;
