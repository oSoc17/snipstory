import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetchSnipper } from '../../redux/actions';
import Spinner from '../../components/spinner/Spinner';
import Button from '../../components/button/Button';

class SnipperDetail extends React.Component {
  componentWillMount() {
    const { fetchSnipper, match: { params: { snipperId } } } = this.props;
    fetchSnipper(snipperId);
  }
  render() {
    let { snipper, isLoading, notFound } = this.props;
    isLoading = false;
    snipper = {
      creators: ['1', '2'],
      description: 'description'
    };

    if (isLoading || !snipper) {
      return <Spinner page size="large" />;
    }
    if (notFound) {
      return <Redirect to="/" />;
    }
    const creators = snipper.creators.join(', ');
    return (
      <div className="page">
        <div className="container">
          <h1>Door {creators}</h1>{' '}
          <img src={snipper.thumbnailURL} alt={`Snipper van ${creators}`} />
          <p>{snipper.description}</p>
          <Button onClick={() => null}>Share</Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.snipper });

export default connect(mapStateToProps, { fetchSnipper })(SnipperDetail);
