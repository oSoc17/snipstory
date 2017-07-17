import React from 'react';
import Suggestion from './Suggestion';

const AppSuggestions = props => {
  return (
    <div>
      {props.suggestions &&
        props.suggestions.map((suggestion, i) => {
          return <Suggestion key={i} {...suggestion} />;
        })}
    </div>
  );
};

export default AppSuggestions;
