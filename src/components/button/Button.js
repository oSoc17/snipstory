import React from 'react';
import { SIZES } from '../../constants';
import './Button.css';

const Button = ({
  primary = false,
  text = '',
  style = {},
  size = SIZES.MEDIUM
}) => {
  const classes = ['button', `button--${size}`];

  if (primary) {
    classes.push('primary');
  }

  return (
    <button className={classes.join(' ')} style={style}>
      {text}
    </button>
  );
};

export default Button;
