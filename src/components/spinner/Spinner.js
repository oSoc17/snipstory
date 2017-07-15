import React from 'react';
import './Spinner.css';
import { SIZES } from '../../constants';

const Spinner = ({ size = SIZES.MEDIUM, page = false, ...props }) => {
  const fillPage = el =>
    <div className="fill-page">
      {el}
    </div>;

  const spinner = (
    <div className={`loader loader--${size}`} {...props}>
      <svg className="loader-inner" viewBox="25 25 50 50">
        <circle
          className="loader-inner-path"
          cx="50"
          cy="50"
          r="20"
          fill="none"
          strokeWidth="3"
        />
      </svg>
    </div>
  );
  return page ? fillPage(spinner) : spinner;
};

export default Spinner;
