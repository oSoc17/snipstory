import React from 'react';
import Bol from './bol';

const Difficulty = props => {
  let data = [];
  for (let i = 1; i <= props.amount; i++) {
    data.push(<Bol filled={true} key={i} />);
  }
  for (let j = 1; j <= 4 - props.amount; j++) {
    data.push(<Bol filled={false} key={props.amount + j} />);
  }

  return (
    <div className="difficulty tip-difficulty-card">
      <h3 className="card-text tip-difficulty">Moeilijkheidsgraad</h3>
      {data}
    </div>
  );
};

export default Difficulty;
