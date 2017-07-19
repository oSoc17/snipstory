import React from 'react';
import { fetchRandomStories, selectStory } from '../../../redux/actions';
import Spinner from '../../../components/spinner/Spinner';
import Navbar from '../../../components/nav/Navbar';
import Footer from '../../../components/footer/Footer';
import moment from 'moment';
import { connect } from 'react-redux';
<<<<<<< HEAD
//import { Search } from 'react-feather';
=======
import { Search } from 'react-feather';
import './StorySelect.css';
>>>>>>> 2981292503cec1447f8b095a9d6f4170b22bd6d3

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
      return <Spinner page size="large" />;
    }

    return (
      <div className="page">
        <Navbar />
        <div className="container">
<<<<<<< HEAD
          <h1>Kies de persoon van wie je het verhaal wilt ontdekken</h1>
          {/* <div className="input-group">
=======
          <h1 className="story-title">
            Kies de persoon van wie je het verhaal wilt ontdekken
          </h1>
          <div className="input-group">
>>>>>>> 2981292503cec1447f8b095a9d6f4170b22bd6d3
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
                      history.push('/rooms/create');
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

export default connect(mapStateToProps, { fetchRandomStories, selectStory })(
  StorySelect
);
