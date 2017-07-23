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
        <div>
          <h1 style={{ textAlign: 'center' }}>Snippers</h1>
          <div className="row" style={{ justifyContent: 'center' }}>
            {snippers.map(snipper => {
              return (
                <div
                  key={snipper.id}
                  className="card snipper"
                  style={{ width: '25em', margin: '2em' }}
                >
                  <img
                    className="card-img-top img-fluid"
                    src={snipper.photoURL}
                    alt={`Snipper van ${snipper.creators}`}
                  />
                  <div
                    className="card-block"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <h2 className="card-title">
                        Door {snipper.creators}
                      </h2>
                      <p
                        className="card-text"
                        style={{ marginTop: '2em', marginBottom: '2em' }}
                      >
                        {snipper.description}
                      </p>
                    </div>
                    <Button inverted to={`/snippers/${snipper.id}`}>
                      Toon snipper
                    </Button>
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
