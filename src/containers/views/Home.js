import React from 'react';
import { Link } from 'react-router-dom';
import ConfirmTeacher from './ConfirmTeacher';

class Home extends React.Component {
  render() {
    return (
      // <div className="page">
      //   <button value="teacher">Teacher</button>
      //   <Link to="/quiz">Start</Link>
      //   <div className="filters" />
      // </div>
      <div>
        <ConfirmTeacher />
      </div>
    );
  }
}

export default Home;
