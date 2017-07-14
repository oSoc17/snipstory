import React from 'react';
import Button from '../../components/button/Button';

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
