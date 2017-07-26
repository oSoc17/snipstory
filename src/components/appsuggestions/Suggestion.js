import React from 'react';

const Suggestion = props =>
  <div className="suggestion col-md-6">
    <img src={props.image} alt="" height="50px" />
    <span className="col-md-6">
      {props.name}
    </span>
  </div>;

export default Suggestion;
