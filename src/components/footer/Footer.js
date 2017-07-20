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
        <div className="partner-mini-container row">
          <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
            <img className="effect img-fluid" src={logo1} alt="logo-1" />
          </div>

          <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
            <img className="effect  img-fluid" src={logo2} alt="logo-2" />
          </div>

          <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
            <img className="effect  img-fluid" src={logo3} alt="logo-3" />
          </div>

          <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
            <img className="effect img-fluid" src={logo8} alt="logo-4" />
          </div>
        </div>

        <div className="partner-mini-container">
          <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
            <img className="effect img-fluid " src={logo7} alt="logo-5" />
          </div>
          <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
            <img className="effect img-fluid " src={logo5} alt="logo-6" />
          </div>
          <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
            <img className="effect img-fluid " src={logo6} alt="logo-7" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
