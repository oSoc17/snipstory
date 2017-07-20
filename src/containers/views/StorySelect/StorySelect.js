import React from 'react';
import {
  fetchRandomStories,
  selectStory,
  createRoom
} from '../../../redux/actions';
import Spinner from '../../../components/spinner/Spinner';
import Navbar from '../../../components/nav/Navbar';
import Footer from '../../../components/footer/Footer';
import moment from 'moment';
import { connect } from 'react-redux';
import StepIndicator from '../../../components/step-indicator/StepIndicator';
//import { Search } from 'react-feather';
import './StorySelect.css';
import StapLogo from './assets/stap01.svg';

class StorySelect extends React.Component {
  componentWillMount() {
    this.props.fetchRandomStories();
  }

  render() {
    const {
      isLoading,
      randomStories,
      error,
      selectStory,
      createRoom
    } = this.props;

    if (isLoading) {
      return <Spinner page size="large" />;
    }

    return (
      <div className="page">
        <Navbar />
        <StepIndicator
          step={1}
          title="Kies een persoon"
          description="Kies de persoon van wie je het verhaal wilt ontdekken"
          image={StapLogo}
        />
        <div className="container">
          {/* <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Zoek hier een persoon of thema"
              aria-describedby="basic-addon1"
            />
            <span className="input-group-addon" id="basic-addon1">
              <Search />
            </span>
          </div> */}
          <div className="random-stories row">
            {randomStories &&
              randomStories.map(story =>
                <div className="col-md-6" key={story.storyId}>
                  <div
                    className="story card"
                    onClick={e => {
                      e.preventDefault();
                      selectStory(story);
                      createRoom('');
                    }}
                  >
                    <img
                      className="card-img-top"
                      src={story.profilePicture}
                      alt={story.name}
                    />
                    <div className="card-block">
                      <h3 className="card-title">
                        <div>
                          {story.name}
                        </div>
                        <small className="text-muted">
                          {story.birthdate} - {story.died}
                        </small>
                      </h3>
                      <p className="card-text">
                        {story.nationality}
                      </p>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">
                        {moment(story.died, 'DD-MM-YYYY').diff(
                          moment(story.birthdate, 'DD-MM-YYYY').format(''),
                          'years'
                        ) + 'jaar oud'}
                      </small>
                    </div>
                  </div>
                </div>
              )}
          </div>
          {error &&
            <div className="error">
              {error}
            </div>}
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.storyselect
});

export default connect(mapStateToProps, {
  fetchRandomStories,
  selectStory,
  createRoom
})(StorySelect);
