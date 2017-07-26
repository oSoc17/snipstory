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
        <ArrowRight size={30} />
      </Link>
    </div>
  );
};

export default FloatingNext;
