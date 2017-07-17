import React from 'react';
import Suggestion from './Suggestion';

const selectRandomSuggestions = suggestions => {
  let randomNumbers = [];
  let randomSuggestions = [];

  while (randomNumbers.length !== 4) {
    let n = Math.floor(Math.random() * suggestions.length);
    if (randomNumbers.indexOf(n) === -1) {
      randomNumbers.push(n);
    }
  }

  let i = 0;
  while (randomSuggestions.length !== 4) {
    randomSuggestions.push(suggestions[randomNumbers[i]]);
    i++;
  }

  return randomSuggestions;
};

const AppSuggestions = props => {
  return (
    <div>
      {props.suggestions &&
        selectRandomSuggestions(props.suggestions).map((suggestion, i) => {
          return <Suggestion key={i} {...suggestion} />;
        })}
    </div>
  );
};

export default AppSuggestions;
