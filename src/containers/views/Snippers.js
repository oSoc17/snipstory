import React from 'react';
import { connect } from 'react-redux';
import { fetchSnippers } from '../../redux/actions';
import Spinner from '../../components/spinner/Spinner';
import Button from '../../components/button/Button';
import Navbar from '../../components/nav/Navbar';
import Footer from '../../components/footer/Footer';

class Snippers extends React.Component {
  componentWillMount() {
    this.props.fetchSnippers();
  }
  render() {
    const { snippers, isLoading } = this.props;
    if (isLoading || !snippers || snippers.length === 0) {
      return <Spinner page size="large" />;
    }
    return (
      <div className="page">
        <Navbar />
        <div className="container">
          <h1>Snippers</h1>
          <div className="row">
            {snippers.map(snipper => {
              return (
                <div className="col-md-6" key={snipper.id}>
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={snipper.photoURL}
                      alt={`Snipper van ${snipper.creators}`}
                    />
                    <div className="card-block">
                      <h2 className="card-title">
                        Door {snipper.creators}
                      </h2>
                      <p className="card-text">
                        {snipper.description}
                      </p>
                      <Button to={`/snippers/${snipper.id}`}>
                        Toon snipper
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.snippers });
export default connect(mapStateToProps, { fetchSnippers })(Snippers);
