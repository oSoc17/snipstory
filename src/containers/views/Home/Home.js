import React from 'react';
import Navbar from '../../../components/nav/Navbar';
import Footer from '../../../components/footer/Footer';
import Creations1 from '../../../components/creations1/Creations1';
import Button from '../../../components/button/Button';
import { X } from 'react-feather';

import './Home.css';

import logo from './assets/logo.png';
import playbutton from './assets/playbutton.svg';
import ht1 from './assets/ht-1.svg';
import ht2 from './assets/ht-2.svg';
import ht3 from './assets/ht-3.svg';
import ht4 from './assets/ht-4.svg';

import Spinner from '../../../components/spinner/Spinner';
import { fetchRandomSnippers } from '../../../redux/actions';
import { connect } from 'react-redux';

import './Home.css';

class Home extends React.Component {
  state = { videoShown: false };
  componentWillMount() {
    this.props.fetchRandomSnippers();
  }

  playVideo(event) {
    this.setState({ videoShown: true });
  }

  hideVideo(event) {
    this.setState({ videoShown: false });
  }

  render() {
    const { randomSnippers, isLoading } = this.props;
    const { videoShown } = this.state;

    return (
      <div className="home page">
        <Navbar />
        <header className={`${videoShown ? 'fade-out' : ''} header-container`}>
          <div className="logo__wrapper">
            <img src={logo} alt="logo" className="logo" />
            <img
              className="button--play"
              onClick={this.playVideo.bind(this)}
              src={playbutton}
              alt="Play button"
            />
          </div>
          <h1 className="header-title">
            <span className="blue">Knutsel met geschiedenis</span>
          </h1>
        </header>
        <div
          className={`${videoShown ? 'fade-in' : ''} header__video`}
          style={{ zIndex: videoShown ? 100 : -1 }}
        >
          <iframe
            id="vimeo-video"
            title="Wat is Snipstory?"
            src={`https://player.vimeo.com/video/226714616?color=3778FB&title=0&byline=0&portrait=0&autoplay=${videoShown}`}
            width="1920"
            height="1080"
            frameBorder="0"
            allowFullScreen
          />
          <Button
            size="small"
            className="button--close"
            onClick={this.hideVideo.bind(this)}
          >
            <X /> <span>Sluit video</span>
          </Button>
        </div>

        <main>
          <section id="howTo" className="how-to-container">
            <div className="how-to-2-container container">
              <div className="ht-mini-container row">
                <img src={ht1} className="ht-1-img" alt="how-to-1" />
                <div className="ht-1-border">
                  <h2 className="ht-title">Ontdek</h2>
                  <p className="ht-paraf">
                    Ontdek verschillende historische figuren aan de hand van hun
                    levensverhaal
                  </p>
                </div>
              </div>

              <div className="ht-mini-2-container row">
                <img src={ht2} className="ht-2-img" alt="how-to-2" />
                <div className="ht-2-border">
                  <h2 className="ht-title">Leer</h2>
                  <p className="ht-paraf">
                    Leer bij over verschillende periodes in de geschiedenis
                  </p>
                </div>
              </div>

              <div className="ht-mini-container row">
                <img src={ht3} className="ht-3-img" alt="how-to-3" />
                <div className="ht-3-border">
                  <h2 className="ht-title">Maak</h2>
                  <p className="ht-paraf">Maak je eigen werkjes</p>
                </div>
              </div>

              <div className="ht-mini-2-container row">
                <img src={ht4} className="ht-4-img" alt="how-to-4" />
                <div className="ht-4-border">
                  <h2 className="ht-title">Deel</h2>
                  <p className="ht-paraf">Deel je creaties met de wereld</p>
                </div>
              </div>
            </div>
          </section>
          {/* <section className="video-section">
            <div className="container">

              <div
                className={`video-placeholder${this.state.thumbFadeout
                  ? ' fade-out'
                  : ''}`}
                style={{
                  backgroundImage: `url(${thumbnail})`,
                  zIndex: this.state.videoShown ? -1 : 2
                }}
              >
                <button
                  onClick={this.playVideo.bind(this)}
                  className="video-play"
                >
                  <div className="video-play__icon">
                    <Play style={{ paddingLeft: '.1rem' }} size={128} />
                  </div>
                </button>
              </div>
            </div>
          </section> */}
          <section className="button-section">
            <Button size="small" inverted to="/story/select">
              Start je verhaal hier
            </Button>
          </section>
          {!randomSnippers || isLoading
            ? <Spinner page />
            : <section id="inspo" className="creations-container">
                <h2 className="creation-title">Snippers</h2>
                <div className="container">
                  <p className="creation-description">
                    Snippers zijn de werkjes van anderen over de geschiedenis.
                    Wil je zelf een Snipper maken? Lees dan een verhaal en laat
                    je inspireren!
                  </p>
                </div>

                <div className="container">
                  <div className="row creations-position">
                    <div className="col-6">
                      <Creations1 snipper={randomSnippers[0]} />
                    </div>
                    <div className="col-6">
                      <Creations1 snipper={randomSnippers[1]} />
                    </div>
                  </div>

                  <div className="row creations-position">
                    <div className="col-6">
                      <Creations1 snipper={randomSnippers[2]} />
                    </div>
                    <div className="col-6">
                      <Creations1 snipper={randomSnippers[3]} />
                    </div>
                  </div>
                </div>
              </section>}
          <section className="button-section button-section--white">
            <Button size="small" to="/story/select">Start je verhaal hier</Button>
          </section>
        </main>

        <Footer />
      </div>
    );
  }
}
const mapStateToProps = state => ({ ...state.snippers });
export default connect(mapStateToProps, { fetchRandomSnippers })(Home);
