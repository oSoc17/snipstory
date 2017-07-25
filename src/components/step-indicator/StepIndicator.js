import React from 'react';
import './StepIndicator.css';
const StepIndicator = ({ step, title, description, image }) => {
  return (
    <div className="step-indicator">
      <div className="container">
        <div className="row">
          <div className="display-1 col-md-2">
            <div className="step-number">
              {step}
            </div>
          </div>
          <div className="col-md-5">
            <div className="step-indicator__body">
              <h1 className="step-indicator__title">
                {title}
              </h1>
              <p className="step-indicator__description">
                {description}
              </p>
            </div>
          </div>
          <div className="col-md-5 d-flex flex-row-reverse">
            <img className="step-indicator__image" src={image} alt={title} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepIndicator;
