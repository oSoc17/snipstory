import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetchSnipper } from '../../redux/actions';
import Spinner from '../../components/spinner/Spinner';
import Button from '../../components/button/Button';
import Navbar from '../../components/nav/Navbar';
import Footer from '../../components/footer/Footer';

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
    return (
      <div className="page">
        <Navbar />
        <div className="container">
          <div className="snipper-info">
            <h1>
              Snipper van {snipper.creators}
            </h1>
            <img
              src={snipper.photoURL}
              alt={`Snipper van ${snipper.creators}`}
            />
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
            Deel
          </Button>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.snipper });

export default connect(mapStateToProps, { fetchSnipper })(SnipperDetail);
