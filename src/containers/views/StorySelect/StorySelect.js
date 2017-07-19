import React from 'react';
import { fetchRandomStories, selectStory } from '../../../redux/actions';
import moment from 'moment';
import { connect } from 'react-redux';
import { Search } from 'react-feather';
import './StorySelect.css';

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
        <div className="container">
          <h1 className="story-title">
            Kies de persoon van wie je het verhaal wilt ontdekken
          </h1>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Zoek hier een persoon of thema"
              aria-describedby="basic-addon1"
            />
            <span className="input-group-addon" id="basic-addon1">
              <Search />
            </span>
          </div>
          <div className="random-stories row">
            {randomStories &&
              randomStories.map(story =>
                <div className="col-md-6">
                  <div
                    className="story card"
                    onClick={e => {
                      e.preventDefault();
                      selectStory(story);
                      history.push('/rooms/create');
                    }}
                    key={story.storyId}
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
