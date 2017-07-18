import React from 'react';

const Suggestion = props =>
  <div>
    <img src={props.image} alt="" height="50px" />
    <span>
      {props.name}
    </span>
  </div>;

export default Suggestion;
