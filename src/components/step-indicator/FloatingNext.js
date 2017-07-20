import React from 'react';
const StepIndicator = ({ step, title, description, image }) => {
  return (
    <div className="step-indicator">
      <div className="container">
        <div className="row">
          <div className="step-number display-1 col-md-3">
            {step}
          </div>
          <div className="step-indicator__body col-md-6">
            <h1 className="step-indicator__title">
              {title}
            </h1>
            <p className="step-indicator__description">
              {description}
            </p>
          </div>
          <img
            className="step-indicator__image col-md-3"
            src={image}
            alt={title}
          />
        </div>
      </div>
    </div>
  );
};

export default StepIndicator;
