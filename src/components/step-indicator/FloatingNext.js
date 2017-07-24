import React from 'react';
import { ArrowRight } from 'react-feather';
import { Link } from 'react-router-dom';
import './FloatingNext.css';

const FloatingNext = ({ nextStep, to }) => {
  return (
    <div className="floating-next">
      <Link to={to} className="floating-next__inner">
        <span className="floating-next__text">
          {nextStep}
        </span>
        <ArrowRight />
      </Link>
    </div>
  );
};

export default FloatingNext;
