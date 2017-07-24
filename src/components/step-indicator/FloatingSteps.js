import React from 'react';
import './FloatingSteps.css';
import { User, Search, Edit2, Share2, Check } from 'react-feather';
import { history } from '../../redux/store';

const steps = [
  { title: 'Kies', icon: User },
  { title: 'Ontdek', icon: Search },
  { title: 'Knutsel', icon: Edit2 },
  { title: 'Deel', icon: Share2 }
];

const FloatingSteps = ({ clickable = true, activeStep, storyId = 1 }) => {
  return (
    <div className="floating-steps row">
      {steps.map((step, i) => {
        const classes = [];
        if (clickable && (i !== activeStep) & (i !== 1)) {
          classes.push('clickable');
        }
        if (i === activeStep) {
          classes.push('floating-step--selected');
        } else if (i < activeStep) {
          classes.push('floating-step--done');
        }
        return (
          <div
            className={`col-sm-3 floating-step ${classes.join(' ')}`}
            key={step.title}
            onClick={_ => {
              if (clickable && i !== activeStep && i !== 1) {
                switch (i) {
                  case 0:
                    history.push(`/story/select?storyId=${storyId}`);
                    break;
                  case 2:
                    history.push(`/knutseltips?storyId=${storyId}`);
                    break;
                  default:
                    history.push(`/story/share?storyId=${storyId}`);
                    break;
                }
              }
            }}
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
