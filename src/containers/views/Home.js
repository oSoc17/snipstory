import React from 'react';
import Button from '../../components/button/Button';
import { MapPin } from 'react-feather';
import { fetchRandomStories, selectStory } from '../../redux/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ConfirmTeacher from './ConfirmTeacher';

class Home extends React.Component {
  componentWillMount() {
    this.props.fetchRandomStories();
  }

  render() {
    const {
      isLoading,
      randomStories,
      error,
      history,
      selectStory
    } = this.props;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <div className="page">
          <button value="teacher">Teacher</button>
          <Link to="/quiz">Ontdek een verhaal</Link>
          <div className="filters" />
        </div>
        <div className="page">
          <div className="random-stories">
            {randomStories &&
              randomStories.map(story =>
                <div key={story.id} className="story">
                  <a
                    href="#"
                    onClick={e => {
                      e.preventDefault();
                      selectStory(story);
                      history.push('/rooms/create');
                    }}
                  >
                    {story.name}
                  </a>
                </div>
              )}
          </div>
          {error &&
            <div className="error">
              {error}
            </div>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.home
});

export default connect(mapStateToProps, { fetchRandomStories, selectStory })(
  Home
);
