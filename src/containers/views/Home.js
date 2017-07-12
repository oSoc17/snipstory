import React from 'react';
import { fetchRandomStories } from '../../redux/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  componentWillMount() {
    this.props.fetchRandomStories();
  }

  render() {
    const { isLoading, randomStories, error } = this.props;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <div className="page">
          <button value="teacher">Teacher</button>
          <Link to="/quiz">Start</Link>
          <div className="filters" />
        </div>
        <div className="page">
          <div className="random-stories">
            {randomStories &&
              randomStories.map(story =>
                <div key={story.id} className="story">
                  {story.name}
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

export default connect(mapStateToProps, { fetchRandomStories })(Home);
