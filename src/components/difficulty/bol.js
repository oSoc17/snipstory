import React from 'react';

const Bol = ({ filled = 'false' }) => {
  if (filled) {
    return (
      <div
        className="difficulty-counter rounded-circle filled"
        style={{ height: '25px', width: '25px' }}
      />
    );
  }
  return (
    <div
      className="difficulty-counter rounded-circle"
      style={{ height: '25px', width: '25px' }}
    />
  );
};

export default Bol;
