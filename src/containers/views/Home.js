import React from 'react';
import Button from '../../components/button/Button';
import Navlink from '../../components/nav/Navlink';

class Home extends React.Component {
  render() {
    return (
      <div className="page">
        <Navlink to="TeacherArea">Inspiratie</Navlink>

        <Navlink to="TeacherArea">Hoe werkt IShare?</Navlink>

        <Button to="/story/select" size="small">
          Start je verhaal hier
        </Button>

        <Navlink to="TeacherArea">Creaties bekijken</Navlink>

        <Navlink to="TeacherArea">Leerkracht</Navlink>
      </div>
    );
  }
}

export default Home;
