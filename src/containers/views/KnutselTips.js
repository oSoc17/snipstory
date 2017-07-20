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
        <div className="container text-center knutseltips">
          <h1>Knutseltips</h1>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              flexWrap: 'wrap'
            }}
          >
            {knutseltips.tips.map((tip, i) =>
              <div key={i}>
                <div className="knutseltip row m-3">
                  <div
                    className="col"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-around',
                      flexDirection: 'column'
                    }}
                  >
                    <span className="d-inline-block tip-name">
                      {tip.name}
                    </span>
                    <div
                      className="knutseltip-image d-inline-block"
                      style={{
                        backgroundImage: 'url(' + tip.image + ')',
                        height: '250px',
                        width: '200px',
                        backgroundSize: 'cover'
                      }}
                    />
                  </div>
                  <div className="col tip-information">
                    <Difficulty amount={tip.difficulty} />
                    <div style={{ textAlign: 'left' }}>
                      {tip.text}
                    </div>
                    <div className="requirements">
                      <h2>Benodigdheden:</h2>
                      <p>
                        {tip.requirements}
                      </p>
                    </div>
                  </div>
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
