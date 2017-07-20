import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetchSnipper } from '../../redux/actions';
import Spinner from '../../components/spinner/Spinner';
import Button from '../../components/button/Button';
import Navbar from '../../components/nav/Navbar';
import Footer from '../../components/footer/Footer';
import { ShareButtons } from 'react-share';
import { Helmet } from 'react-helmet';

const {
  FacebookShareButton,
  TwitterShareButton,
  GooglePlusShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  RedditShareButton
} = ShareButtons;

class SnipperDetail extends React.Component {
  componentWillMount() {
    const { fetchSnipper, match: { params: { snipperId } } } = this.props;
    fetchSnipper(snipperId);
  }
  render() {
    let { snipper, isLoading, notFound, showToast } = this.props;
    isLoading = false;
    const title = `Snipper van ${snipper.creators}`;

    if (isLoading || !snipper) {
      return <Spinner page size="large" />;
    }
    if (notFound) {
      return <Redirect to="/" />;
    }
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
        <div className="container">
          <div className="snipper-info">
            <h1>
              Snipper van {snipper.creators}
            </h1>
            <img src={snipper.photoURL} alt={title} />
            <p>
              {snipper.description}
            </p>
          </div>
          {snipper.story &&
            <div className="story-info">
              <p>
                Gemaakt over het verhaal van {snipper.story.name}
              </p>
              <Button inverted to={`/story/select?id=${snipper.storyId}`}>
                Ontdek dit verhaal zelf
              </Button>
            </div>}
          <div className="snipper-share">
            <div className="social-share">
              <FacebookShareButton />
              <GooglePlusShareButton />
              <TwitterShareButton />
              <PinterestShareButton />
              <WhatsappShareButton />
              <RedditShareButton />
              <TelegramShareButton />
            </div>
            <input
              ref={linkInput => {
                this.linkInput = linkInput;
              }}
              type="text"
              readOnly
              value={window.location.href}
              onClick={e => e.target.select()}
            />
            <Button
              onClick={_ => {
                this.linkInput.select();
                document.execCommand('copy');
                showToast({
                  text: `De link is gekopieerd naar jouw klembord, stuur het naar je vrienden!`
                });
              }}
            >
              Kopieer link
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
