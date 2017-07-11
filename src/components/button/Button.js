import React from 'react';
import { SIZES } from '../../constants';
import './Button.css';

const Button = ({
  primary = false,
  style = {},
  size = SIZES.MEDIUM,
  children = ''
}) => {
  const classes = ['button', `button--${size}`];

  if (primary) {
    classes.push('primary');
  }

  return (
    <button className={classes.join(' ')} style={style}>
      {children}
    </button>
  );
};

export default Button;
