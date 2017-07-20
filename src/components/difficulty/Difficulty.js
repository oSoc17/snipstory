import React from 'react';
import Bol from './Bol';

const Difficulty = props => {
  let data = [];
  console.log(props.amount);
  for (let i = 1; i <= props.amount; i++) {
    data.push(<Bol filled={true} key={i} />);
  }
  for (let j = 1; j <= 4 - props.amount; j++) {
    data.push(<Bol filled={false} key={props.amount + j} />);
  }

  console.log(data);

  return (
    <div className="difficulty">
      <p>Moeilijkheidsgraad</p>
      {data}
    </div>
  );
};

export default Difficulty;
