import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div className="page">
        <Button inverted to="/teacher">
          Leerkracht
        </Button>
        <Button to="/story/select" size="large">
          Ontdek een verhaal
        </Button>
      </div>
    );
  }
}

export default Home;
