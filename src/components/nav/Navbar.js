import React from 'react';
import Navlink from './Navlink';
import logo from './logo.svg';

const Navbar = () => {
  return (
    <nav className="nav-container">
      <Navlink to="/snippers">Knutseltips</Navlink>
      <Navlink to="/">
        <img src={logo} alt="logo" className="logo" />
      </Navlink>
      <Navlink to="/snippers">Snippers bekijken</Navlink>
    </nav>
  );
};

export default Navbar;
