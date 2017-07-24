import React from 'react';
import './FloatingSteps.css';
import { User, Search, Edit2, Share2 } from 'react-feather';

const steps = [
  { title: 'Kies', icon: User },
  { title: 'Ontdek', icon: Search },
  { title: 'Knutsel', icon: Edit2 },
  { title: 'Deel', icon: Share2 }
];

const FloatingSteps = ({ activeStep }) => {
  return (
    <div className="floating-steps">
      <div className="row">
        {steps.map(step =>
          <div className="col-sm-3 floating-step" key={step.title}>
            <div className="floating-step__icon">
              <step.icon />
            </div>

            <div className="floating-step__title">
              {step.title}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingSteps;
