import React from 'react';
import Modal from '../modal/Modal';

const Suggestion = props =>
  <div>
    <img src={props.image} alt="" height="50px" />
    <span>
      {props.name}
    </span>
  </div>;

export default Suggestion;
