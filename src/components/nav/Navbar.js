import React from 'react';
import Navlink from './Navlink';
import Button from '../button/Button';

const Navbar = () => {
  return (
    <nav className="nav-container">
      <Navlink to="/#inspo">Inspiratie</Navlink>
      <Navlink to="/#howTo">Hoe werkt Snipstory?</Navlink>
      <Button to="/story/select" size="small">
        Start je verhaal hier
      </Button>
      <Navlink to="/#inspo">Snippers bekijken</Navlink>
      <Navlink to="/teacher">Leerkracht</Navlink>
    </nav>
  );
};

export default Navbar;
