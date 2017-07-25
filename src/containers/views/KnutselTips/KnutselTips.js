import React from 'react';
import { connect } from 'react-redux';
import { fetchKnutselTips } from '../../../redux/actions';
import NavBar from '../../../components/nav/Navbar';
import Footer from '../../../components/footer/Footer';
import Difficulty from '../../../components/difficulty/Difficulty';
import Spinner from '../../../components/spinner/Spinner';
import { parse } from 'query-string';
import StapLogo from './assets/stap03.svg';

import StepIndicator from '../../../components/step-indicator/StepIndicator';
import FloatingSteps from '../../../components/step-indicator/FloatingSteps';
import FloatingNext from '../../../components/step-indicator/FloatingNext';

class KnutselTips extends React.Component {
  state = {
    storyId: null
  };

  componentWillMount() {
    const { knutseltips, fetchKnutselTips, location: { search } } = this.props;
    if (!knutseltips.tips) {
      fetchKnutselTips();
    }
    const queryParams = parse(search);
    this.setState({ storyId: queryParams.storyId });
  }

  render() {
    const { knutseltips } = this.props;
    const { storyId } = this.state;

    return (
      <div>
        <NavBar />
        {storyId &&
          <StepIndicator
            step={3}
            title="Knutsel"
            description="Nu is het jouw beurt! Maak een snipper over het verhaal dat je hebt gelezen"
            image={StapLogo}
          />}
        {knutseltips.isFetching
          ? <Spinner page size="large" />
          : <div>
              {!storyId && <h1 style={{ textAlign: 'center' }}>Knutseltips</h1>}
              <div
                className="knutseltips row"
                style={{ justifyContent: 'center' }}
              >
                {knutseltips.tips.map((tip, i) =>
                  <div
                    key={i}
                    className="card knutseltip"
                    style={{ width: '25em', margin: '2em' }}
                  >
                    <img
                      className="card-img-top image-fluid"
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
              {storyId && <FloatingSteps activeStep={2} />}
              {storyId &&
                <FloatingNext
                  to={`/story/share?storyId=${storyId}`}
                  nextStep="Deel"
                />}
            </div>}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  knutseltips: state.knutseltips
});

export default connect(mapStateToProps, { fetchKnutselTips })(KnutselTips);
