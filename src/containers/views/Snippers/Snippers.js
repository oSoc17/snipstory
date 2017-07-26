import React from 'react';
import { connect } from 'react-redux';
import { history } from '../../../redux/store';
import { fetchSnippers } from '../../../redux/actions';
import Spinner from '../../../components/spinner/Spinner';
import Navbar from '../../../components/nav/Navbar';
import Footer from '../../../components/footer/Footer';
import './Snippers.css';

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
          <h1 className="snippers-title" style={{ textAlign: 'center' }}>
            Snippers
          </h1>
          <div className="row" style={{ justifyContent: 'center' }}>
            {snippers.map(snipper => {
              return (
                <div
                  key={snipper.id}
                  className="card snipper"
                  style={{ width: '25em', margin: '2em' }}
                  onClick={_ => {
                    history.push('/snippers/' + snipper.id);
                  }}
                >
                  {snipper.fileType === 'video'
                    ? <video
                        controls
                        src={snipper.photoURL}
                        className="card-img-top img-fluid"
                      />
                    : <img
                        src={snipper.photoURL}
                        alt={`Snipper van ${snipper.creators}`}
                        className="img-fluid card-img-top"
                      />}
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
                        Geknutseld door {snipper.creators}
                      </h2>
                      <p
                        className="card-text"
                        style={{ marginTop: '2em', marginBottom: '2em' }}
                      >
                        {snipper.description}
                      </p>
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
