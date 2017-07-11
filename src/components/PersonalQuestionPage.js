import React from "react";

<<<<<<< HEAD
export const PersonalQuestionPage = ({question, choices, onAnswer}) => (
=======
export const PersonalQuestionPage = ({question, choices}) => (
>>>>>>> 707ff25ff1002b761870c631fa36f497e21dda82
  <div>
    <span>{question}</span>
    <div id={choices[0]}>{choices[0]}</div>
    <div id={choices[1]}>{choices[1]}</div>
    <div id={choices[2]}>{choices[2]}</div>
    <div id={choices[3]}>{choices[3]}</div>
  </div>
);
<<<<<<< HEAD

// onAnswer = check if all ppl in the room have voted ==> most votes is the winner
=======
>>>>>>> 707ff25ff1002b761870c631fa36f497e21dda82
