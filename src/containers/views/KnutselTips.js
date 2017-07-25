import React from 'react';
import { connect } from 'react-redux';
import { fetchKnutselTips } from '../../redux/actions';
import NavBar from '../../components/nav/Navbar';
import Footer from '../../components/footer/Footer';
import Difficulty from '../../components/difficulty/Difficulty';

class KnutselTips extends React.Component {
  componentWillMount() {
    this.props.fetchKnutselTips();
  }

  render() {
    const { knutseltips } = this.props;
    return (
      <div>
        <NavBar />
        <div>
          <h1 style={{ textAlign: 'center' }}>Knutseltips</h1>
          <div className="knutseltips row">
            {knutseltips.tips.map((tip, i) =>
              <div
                className="card knutseltip"
                style={{ width: '20em', margin: '2em' }}
              >
                <img
                  class="card-img-top"
                  style={{ maxWidth: '100%' }}
                  src={tip.image}
                  alt={tip.name}
                />
                <div className="card-block">
                  <h4 className="card-title">
                    {tip.name}
                  </h4>
                  <p className="card-text">
                    {tip.text}
                  </p>
                </div>
                <div className="card-block">
                  <Difficulty amount={tip.difficulty} />
                </div>
                <div className="card-block">
                  <p>Benodigdheden:</p>
                  <p className="card-text">
                    {tip.requirements}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  knutseltips: state.knutseltips
});

export default connect(mapStateToProps, { fetchKnutselTips })(KnutselTips);
