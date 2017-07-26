import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetchSnipper } from '../../../redux/actions';
import Spinner from '../../../components/spinner/Spinner';
import Button from '../../../components/button/Button';
import Navbar from '../../../components/nav/Navbar';
import Footer from '../../../components/footer/Footer';
import { ShareButtons, generateShareIcon } from 'react-share';
import { Helmet } from 'react-helmet';
import './SnipperDetail.css';

const {
  FacebookShareButton,
  TwitterShareButton,
  GooglePlusShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  RedditShareButton
} = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const TelegramIcon = generateShareIcon('telegram');
const WhatsappIcon = generateShareIcon('whatsapp');
const RedditIcon = generateShareIcon('reddit');

class SnipperDetail extends React.Component {
  componentWillMount() {
    const { fetchSnipper, match: { params: { snipperId } } } = this.props;
    fetchSnipper(snipperId);
  }
  render() {
    let { snipper, isLoading, notFound, showToast } = this.props;
    isLoading = false;

    if (isLoading || !snipper) {
      return <Spinner page size="large" />;
    }
    if (notFound) {
      return <Redirect to="/" />;
    }

    const title = `Snipper geknutseld door ${snipper.creators}`;
    const href = window.location.href;
    return (
      <div className="page">
        <Helmet>
          <title>
            {title}
          </title>
          <meta property="og:title" content={title} />
          <meta property="og:description" content={title} />
          <meta property="og:image" content={snipper.photoURL} />
          <meta property="og:url" content={window.location.href} />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={title} />
          <meta name="twitter:image" content={snipper.photoURL} />
          <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
        <Navbar />
        <div className="snipper-detail-page">
          <div className="creators">
            <h1 className="container">
              Snipper geknutseld door {snipper.creators}
            </h1>
          </div>

          <div className="snipper-info">
            <div className="media-container">
              {snipper.fileType === 'video'
                ? <video autoPlay controls src={snipper.photoURL} />
                : <img
                    src={snipper.photoURL}
                    alt={`Snipper van ${snipper.creators}`}
                    className="img-fluid"
                  />}
            </div>
            <div className="snipper-description">
              <h3>
                Deze snipper gaat over {snipper.story.name}
              </h3>
              <p>
                {snipper.description}
              </p>
              {snipper.story &&
                <div className="story-info">
                  <Button size="small" inverted to={`/story/select?id=${snipper.storyId}`}>
                    Ontdek het verhaal van {snipper.story.name} zelf
                  </Button>
                </div>}
            </div>
          </div>

          <div className="snipper-share">
            <h2>Deel deze snipper!</h2>
            <div className="social-share">
              <FacebookShareButton url={href}>
                <FacebookIcon />
              </FacebookShareButton>
              <GooglePlusShareButton url={href}>
                <GooglePlusIcon />
              </GooglePlusShareButton>
              <TwitterShareButton url={href}>
                <TwitterIcon />
              </TwitterShareButton>
              <WhatsappShareButton url={href}>
                <WhatsappIcon />
              </WhatsappShareButton>
              <RedditShareButton url={href}>
                <RedditIcon />
              </RedditShareButton>
              <TelegramShareButton url={href}>
                <TelegramIcon />
              </TelegramShareButton>
            </div>
            <input
              ref={linkInput => {
                this.linkInput = linkInput;
              }}
              className="form-field__input"
              type="text"
              readOnly
              value={window.location.href}
              onClick={e => e.target.select()}
            />
            <Button
              size="small"
              inverted
              onClick={_ => {
                this.linkInput.select();
                document.execCommand('copy');
                showToast({
                  text: `De link is gekopieerd naar jouw klembord, stuur het naar je vrienden!`
                });
              }}
            >
              Kopieer
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.snipper });

export default connect(mapStateToProps, { fetchSnipper })(SnipperDetail);
