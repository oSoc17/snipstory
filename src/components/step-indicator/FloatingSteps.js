import React from 'react';
import './FloatingSteps.css';
import { User, Search, Edit2, Share2, Check } from 'react-feather';

const steps = [
  { title: 'Kies', icon: User },
  { title: 'Ontdek', icon: Search },
  { title: 'Knutsel', icon: Edit2 },
  { title: 'Deel', icon: Share2 }
];

const FloatingSteps = ({ activeStep }) => {
  return (
    <div className="floating-steps row">
      {steps.map((step, i) => {
        const classes = [];
        if (i === activeStep) {
          classes.push('floating-step--selected');
        } else if (i < activeStep) {
          classes.push('floating-step--done');
        }
        return (
          <div
            className={`col-sm-3 floating-step ${classes.join(' ')}`}
            key={step.title}
          >
            <div className="floating-step__icon">
              <step.icon />
              <div className="checkmark">
                <Check size="16" />
              </div>
            </div>

            <div className="floating-step__title">
              {step.title}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FloatingSteps;
