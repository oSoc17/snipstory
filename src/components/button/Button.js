import React from 'react';
import { Link } from 'react-router-dom';
import { SIZES } from '../../constants';
import './Button.css';

const Button = ({
  inverted = true,
  size = SIZES.MEDIUM,
  children = '',
  to,
  ...props
}) => {
  const classes = ['button', `button--${size}`];

  if (inverted) {
    classes.push('button--inverted');
  }

  if (to) {
    return (
      <Link className={classes.join(' ')} to={to} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes.join(' ')} {...props}>
      {children}
    </button>
  );
};

export default Button;
