import React from 'react';
import { Link } from 'react-router-dom';
import { SIZES } from '../../constants';
import './Button.css';

const Button = ({
  inverted = false,
  size = SIZES.MEDIUM,
  children = '',
  to,
  className = '',
  ...props
}) => {
  const incomingClasses = className.split(' ');
  const classes = ['button', `button--${size}`, ...incomingClasses];

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
