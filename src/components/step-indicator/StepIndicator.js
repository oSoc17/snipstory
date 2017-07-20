import React from 'react';
import './StepIndicator.css';
const StepIndicator = ({ step, title, description, image }) => {
  return (
    <div className="step-indicator">
      <div className="step-number">
        {step}
      </div>
      <div className="step-indicator__body">
        <h1 className="step-indicator__title">
          {title}
        </h1>
        <p className="step-indicator__description">
          {description}
        </p>
      </div>
      <img className="step-indicator__image" src={image} alt={title} />
    </div>
  );
};

export default StepIndicator;
