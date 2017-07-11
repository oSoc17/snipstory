export const PersonalQuestionPage = ({ question, choices }) =>
  <div>
    <span>
      {question}
    </span>
    <div id={choices[0]}>
      {choices[0]}
    </div>
    <div id={choices[1]}>
      {choices[1]}
    </div>
    <div id={choices[2]}>
      {choices[2]}
    </div>
    <div id={choices[3]}>
      {choices[3]}
    </div>
  </div>;
