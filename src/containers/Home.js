import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div className="page">
        <button value="teacher">Teacher</button>
        <Link to="/questions">Start</Link>
        <div className="filters" />
      </div>
    );
  }
}

export default Home;
