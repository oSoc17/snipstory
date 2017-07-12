import React from 'react';
import { fetchRandomStories, selectStory } from '../../redux/actions';
import { connect } from 'react-redux';

class StorySelect extends React.Component {
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
      <div className="page">
        <div className="random-stories">
          {randomStories &&
            randomStories.map(story =>
              <div key={story.id} className="story">
                <a
                  href=""
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
    );
  }
}

const mapStateToProps = state => ({
  ...state.storyselect
});

export default connect(mapStateToProps, { fetchRandomStories, selectStory })(
  StorySelect
);
