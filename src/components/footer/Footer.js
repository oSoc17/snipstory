import React from 'react';

import logo1 from './assets/logo01.png';
import logo2 from './assets/logo02.jpg';
import logo3 from './assets/logo03.png';
import logo5 from './assets/logo05.png';
import logo6 from './assets/logo06.png';
import logo7 from './assets/logo07.png';
import logo8 from './assets/logo08.png';

const Footer = () => {
  return (
    <footer>
      <div className="partner-container">
        <div className="partner-mini-container">
          <img className="effect logo1" src={logo1} alt="logo-1" />
          <img className="effect logo2" src={logo2} alt="logo-2" />
          <img className="effect logo3" src={logo3} alt="logo-3" />
          <img className="effect logo7" src={logo8} alt="logo-4" />
        </div>

        <div className="partner-mini-container">
          <img className="effect logo6" src={logo7} alt="logo-5" />
          <img className="effect logo4" src={logo5} alt="logo-6" />
          <img className="effect logo5" src={logo6} alt="logo-7" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
