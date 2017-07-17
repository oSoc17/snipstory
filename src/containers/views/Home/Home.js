import React from 'react';
import Button from '../../../components/button/Button';
import Navlink from '../../../components/nav/Navlink';
import './Home.css';
import logo from './assets/logo.svg';
import ht1 from './assets/ht-1.svg';
import ht2 from './assets/ht-2.svg';
import ht3 from './assets/ht-3.svg';
import ht4 from './assets/ht-4.svg';

class Home extends React.Component {
  render() {
    return (
      <div className="page">
        <nav className="nav-container">
          <Navlink to="TeacherArea">Inspiratie</Navlink>

          <Navlink to="TeacherArea">Hoe werkt Snipstory?</Navlink>

          <Button to="/story/select" size="small">
            Start je verhaal hier
          </Button>

          <Navlink to="TeacherArea">Snippers bekijken</Navlink>

          <Navlink to="TeacherArea">Leerkracht</Navlink>
        </nav>

        <header className="header-container">
          <img src={logo} className="logo" alt="logo" />
          <h1 className="header-title">Ontdek de geschiedenis</h1>
          <p className="header-paraf">
            Hier kan je samen met je klasgenoten de geschiedenis ontdekken: lees
            de verhalen, test je kennis en maak leuke werkjes!
          </p>
        </header>

        <main>
          <section className="how-to-container">
            <div className="ht-mini-container">
              <img src={ht1} className="ht-1-img" alt="how-to-photo-1" />
              <div className="ht-1-border">
                <h2 className="ht-title">Ontdek</h2>
                <p className="ht-paraf">
                  Ontdek verschillende historische figuren aan de hand van hun
                  levensverhaal
                </p>
              </div>
            </div>

            <div className="ht-mini-container">
              <img src={ht2} className="ht-1-img" alt="how-to-photo-1" />
              <div className="ht-1-border">
                <h2 className="ht-title">Leer</h2>
                <p className="ht-paraf">
                  Leer bij over verschillende periodes in de geschiedenis
                </p>
              </div>
            </div>

            <div className="ht-mini-container">
              <img src={ht3} className="ht-1-img" alt="how-to-photo-1" />
              <div className="ht-1-border">
                <h2 className="ht-title">Creeër</h2>
                <p className="ht-paraf">Creeër je eigen werkjes</p>
              </div>
            </div>

            <div className="ht-mini-container">
              <img src={ht4} className="ht-1-img" alt="how-to-photo-1" />
              <div className="ht-1-border">
                <h2 className="ht-title">Deel</h2>
                <p className="ht-paraf">Deel je creaties met de wereld</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Home;
