import React from 'react';
import { connect } from 'react-redux';
import { fetchKnutselTips } from '../../redux/actions';
import NavBar from '../../components/nav/Navbar';
import Footer from '../../components/footer/Footer';

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
                <div className="knutseltip m-3">
                  <div
                    className="d-inline-block rounded-circle"
                    style={{
                      backgroundImage: 'url(' + tip.image + ')',
                      height: '100px',
                      width: '100px',
                      backgroundSize: 'cover'
                    }}
                  />
                  <span className="d-inline-block">
                    {tip.name}
                  </span>
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
