import React from 'react';

import Button from '../../../components/button/Button';
import Navlink from '../../../components/nav/Navlink';
import Creations1 from '../../../components/creations1/Creations1';
import Creations2 from '../../../components/creations2/Creations2';

import './Home.css';

import logo from './assets/logo.svg';
import ht1 from './assets/ht-1.svg';
import ht2 from './assets/ht-2.svg';
import ht3 from './assets/ht-3.svg';
import ht4 from './assets/ht-4.svg';

import logo1 from './assets/logo01.png';
import logo2 from './assets/logo02.jpg';
import logo3 from './assets/logo03.png';
import logo5 from './assets/logo05.png';
import logo6 from './assets/logo06.png';
import logo7 from './assets/logo07.png';
import logo8 from './assets/logo08.png';

class Home extends React.Component {
  render() {
    return (
      <div className="page">
        <nav className="nav-container">
          <Navlink to="/#inspo">Inspiratie</Navlink>

          <Navlink to="/#howTo">Hoe werkt Snipstory?</Navlink>

          <Button to="/story/select" size="small">
            Start je verhaal hier
          </Button>

          <Navlink to="/#inspo">Snippers bekijken</Navlink>

          <Navlink to="/teacher">Leerkracht</Navlink>
        </nav>

        <header className="header-container">
          <img src={logo} className="logo" alt="logo" />
          <h1 className="header-title">
            <span className="blue">ontdek</span>{' '}
            <span className="pink">leer</span>{' '}
            <span className="orange">maak</span>
          </h1>
          <p className="header-paraf">
            Hier kan je samen met je klasgenoten de geschiedenis ontdekken: lees
            de verhalen, test je kennis en maak leuke werkjes!
          </p>
        </header>

        <main>
          <section id="howTo" className="how-to-container">
            <div className="how-to-2-container">
              <div className="ht-mini-container">
                <img src={ht1} className="ht-1-img" alt="how-to-1" />
                <div className="ht-1-border">
                  <h2 className="ht-title">Ontdek</h2>
                  <p className="ht-paraf">
                    Ontdek verschillende historische figuren aan de hand van hun
                    levensverhaal
                  </p>
                </div>
              </div>

              <div className="ht-mini-2-container">
                <img src={ht2} className="ht-2-img" alt="how-to-2" />
                <div className="ht-2-border">
                  <h2 className="ht-title">Leer</h2>
                  <p className="ht-paraf">
                    Leer bij over verschillende periodes in de geschiedenis
                  </p>
                </div>
              </div>

              <div className="ht-mini-container">
                <img src={ht3} className="ht-3-img" alt="how-to-3" />
                <div className="ht-3-border">
                  <h2 className="ht-title">Maak</h2>
                  <p className="ht-paraf">Maak je eigen werkjes</p>
                </div>
              </div>

              <div className="ht-mini-2-container">
                <img src={ht4} className="ht-4-img" alt="how-to-4" />
                <div className="ht-4-border">
                  <h2 className="ht-title">Deel</h2>
                  <p className="ht-paraf">Deel je creaties met de wereld</p>
                </div>
              </div>
            </div>
          </section>

          <section id="inspo" className="creations-container">
            <h2 className="creation-title">Creaties</h2>
            <div className="creations-1">
              <Creations1 />
              <Creations2 />
            </div>

            <div className="creations-2">
              <Creations1 />
              <Creations2 />
            </div>
          </section>
        </main>

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
      </div>
    );
  }
}

export default Home;
