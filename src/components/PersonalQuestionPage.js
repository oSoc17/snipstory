import React from "react";

export const PersonalQuestionPage = ({question, choices, onAnswer}) => (
  <div>
    <span>{question}</span>
    <div id={choices[0]}>{choices[0]}</div>
    <div id={choices[1]}>{choices[1]}</div>
    <div id={choices[2]}>{choices[2]}</div>
    <div id={choices[3]}>{choices[3]}</div>
  </div>
);

// onAnswer = check if all ppl in the room have voted ==> most votes is the winner
