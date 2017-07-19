import React from 'react';
import { connect } from 'react-redux';
import { fetchSnippers } from '../../redux/actions';
import Spinner from '../../components/spinner/Spinner';
import Button from '../../components/button/Button';

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
        <div className="container">
          {snippers.map(snipper => {
            const creators = Object.keys(snipper.creators)
              .map(snipperId => snipper.creators[snipperId])
              .join(', ');
            return (
              <div className="col-md-6" key={snipper.id}>
                <div class="card">
                  <img
                    class="card-img-top"
                    src={snipper.thumbnailURL}
                    alt={`Snipper van ${creators}`}
                  />
                  <div class="card-block">
                    <h2 class="card-title">
                      Door {creators}
                    </h2>
                    <p class="card-text">
                      {snipper.description}
                    </p>
                    <Button to={`/snippers/${snipper.id}`}>Toon snipper</Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.snippers });
export default connect(mapStateToProps, { fetchSnippers })(Snippers);
