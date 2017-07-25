import React from 'react';
import Navlink from './Navlink';
import Button from '../button/Button';
import Navlogo from '../../containers/views/Home/assets/menu-logo.png';
import './Navlink.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item nav-logo">
            <Navlink to="/">
              <img src={Navlogo} alt="nav logo" width="80px" />
            </Navlink>
          </li>
          <li className="nav-item">
            <Navlink to="/snippers">Snippers bekijken</Navlink>
          </li>
          <li className="nav-item active">
            <Navlink to="/knutseltips">Knutseltips</Navlink>
          </li>
          <li className="nav-item">
            <Button to="/story/select" size="small">
              Start je verhaal hier
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );

  /*
    <nav className="nav-container">
      <Navlink to="/#inspo">Inspiratie</Navlink>
      <Navlink to="/#howTo">Hoe werkt Snipstory?</Navlink>
      <Button to="/story/select" size="small">
        Start je verhaal hier
      </Button>
      <Navlink to="/#inspo">Snippers bekijken</Navlink>
      <Navlink to="/teacher">Leerkracht</Navlink>
    </nav> */
};

export default Navbar;
