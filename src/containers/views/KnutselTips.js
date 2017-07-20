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
        <h1>Inspiratie</h1>
        {knutseltips.tips.map((tip, i) =>
          <div className="knutseltip" key={i}>
            <div
              style={{
                backgroundImage: 'url(' + tip.image + ')',
                height: '100px',
                width: '100px',
                backgroundSize: 'cover'
              }}
            />
            {tip.name}
          </div>
        )}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  knutseltips: state.knutseltips
});

export default connect(mapStateToProps, { fetchKnutselTips })(KnutselTips);
