import React from 'react';

import logo1 from './assets/logo01.png';
import logo2 from './assets/logo02.jpg';
import logo3 from './assets/logo03.png';
import logo4 from './assets/logo04.png';

import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="partner-container">
        <h2 className="partner-title">In samenwerking met onze partners</h2>
        <div className="partner-mini-container row">
          <div className="logo col-xs-6 col-sm-4 col-md-3 col-lg-2">
            <a
              href="https://www.west-vlaanderen.be/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img className="effect img-fluid" src={logo1} alt="logo-1" />
            </a>
          </div>
          <div className="logo col-xs-6 col-sm-4 col-md-3 col-lg-2">
            <a
              href="http://idrops.org/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img className="effect img-fluid" src={logo2} alt="logo-2" />
            </a>
          </div>
          <div className="logo col-xs-6 col-sm-4 col-md-3 col-lg-2">
            <a
              href="http://www.bienet.be/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img className="effect img-fluid" src={logo3} alt="logo-3" />
            </a>
          </div>
          <div className="logo col-xs-6 col-sm-4 col-md-3 col-lg-2">
            <a
              href="https://www.openknowledge.be/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img className="effect img-fluid" src={logo4} alt="logo-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
