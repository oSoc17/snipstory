import React from 'react';
import { ArrowRight } from 'react-feather';
import './FloatingNext.css';

const FloatingNext = ({ nextStep }) => {
  return (
    <div className="floating-next">
      <button className="floating-next__inner">
        <span>
          {nextStep}
        </span>
        <ArrowRight />
      </button>
    </div>
  );
};

export default FloatingNext;
