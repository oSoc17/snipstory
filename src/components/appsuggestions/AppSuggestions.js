import React from 'react';
import Suggestion from './Suggestion';

const AppSuggestions = props => {
  return (
    <article className="container">
      <h1>Maak zelf iets bij dit verhaal</h1>
      <p className="lead">
        Hier zijn een aantal voorbeelden van wat je kan gebruiken (je kan zelf
        ook iets kiezen)
      </p>
      <div className="container row">
        {props.suggestions &&
          props.suggestions.map((suggestion, i) => {
            return <Suggestion key={i} {...suggestion} />;
          })}
      </div>
    </article>
  );
};

export default AppSuggestions;
