import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';

class Home extends React.Component {
  render() {
    return (
      <div className="page">
        <Button>Teacher</Button>
        <Button size="small">Teacher</Button>
        <Button>Teacher</Button>
        <Link to="/quiz">Start</Link>
        <div className="filters" />
      </div>
    );
  }
}

export default Home;
