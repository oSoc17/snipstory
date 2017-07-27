import React from 'react';
import {
  fetchRandomStories,
  selectStory,
  createRoom
} from '../../../redux/actions';
import Spinner from '../../../components/spinner/Spinner';
import Navbar from '../../../components/nav/Navbar';
import Footer from '../../../components/footer/Footer';
import Button from '../../../components/button/Button';
import { connect } from 'react-redux';
import FloatingSteps from '../../../components/step-indicator/FloatingSteps';
import StepIndicator from '../../../components/step-indicator/StepIndicator';
import { getReadableDate } from '../../../helpers/moment';
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
          {isLoading
            ? <Spinner page size="large" />
            : <div className="random-stories row">
                {randomStories &&
                  randomStories.map(story =>
                    <div
                      className="story card"
                      key={story.storyId}
                      onClick={e => {
                        e.preventDefault();
                        selectStory(story);
                        createRoom('');
                      }}
                      style={{ margin: '1em', width: '20em' }}
                    >
                      <img
                        className="card-img-top img-fluid"
                        src={story.profilePicture}
                        alt={story.name}
                      />
                      <div className="card-block">
                        <h3 className="card-title">
                          {story.name}
                        </h3>
                        <p className="card-text">
                          {story.description}
                        </p>
                        <p className="card-text card-text--icon">
                          <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <title>child_friendly</title>
                            <path d="M17.016 20.016c0.844 0 1.5-0.656 1.5-1.5s-0.656-1.5-1.5-1.5-1.5 0.656-1.5 1.5 0.656 1.5 1.5 1.5zM8.016 20.016c0.844 0 1.5-0.656 1.5-1.5s-0.656-1.5-1.5-1.5-1.5 0.656-1.5 1.5 0.656 1.5 1.5 1.5zM19.313 15.891c0.703 0.656 1.172 1.594 1.172 2.625 0 1.922-1.547 3.469-3.469 3.469-1.781 0-3.234-1.313-3.469-3h-2.109c-0.234 1.688-1.641 3-3.422 3-1.922 0-3.516-1.547-3.516-3.469 0-1.313 0.75-2.484 1.828-3.094-0.234-0.328-2.109-4.406-2.109-4.406h-2.203v-2.016h3.469l0.938 2.016h14.578c0 1.828-0.656 3.516-1.688 4.875zM12.984 2.016c4.406 0 8.016 3.563 8.016 7.969h-8.016v-7.969z" />
                          </svg>{' '}
                          {getReadableDate(story.birthdate)}
                        </p>
                        <p className="card-text card-text--icon">
                          <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                          >
                            <title>cross</title>
                            <path d="M5.979 10.974v5.021h7.041v11.99h5.042v-11.99h6.958v-5.021h-6.958v-6.958h-5.042v6.958h-7.041z" />
                          </svg>
                          {getReadableDate(story.died)}
                        </p>
                        <p className="card-text card-text--icon">
                          <svg
                            style={{ transform: 'scale(0.8)' }}
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                          >
                            <title>flag</title>
                            <path d="M0 0h4v32h-4v-32z" />
                            <path d="M26 20.094c2.582 0 4.83-0.625 6-1.547v-16c-1.17 0.922-3.418 1.547-6 1.547s-4.83-0.625-6-1.547v16c1.17 0.922 3.418 1.547 6 1.547z" />
                            <path d="M19 1.016c-1.466-0.623-3.61-1.016-6-1.016-3.012 0-5.635 0.625-7 1.547v16c1.365-0.922 3.988-1.547 7-1.547 2.39 0 4.534 0.393 6 1.016v-16z" />
                          </svg>
                          {story.nationality}
                        </p>
                      </div>
                    </div>
                  )}

                <Button
                  onClick={e => {
                    e.preventDefault();
                    this.props.fetchRandomStories();
                  }}
                >
                  Krijg 3 andere personen
                </Button>
              </div>}
          <FloatingSteps clickable={false} activeStep={0} />
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
