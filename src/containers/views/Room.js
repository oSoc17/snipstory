import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import {
  fetchRoomData,
  listenForRoomChange,
  updateModule,
  getRandomSuggestions,
  joinRoom,
  sendCreation,
  addDescriptionToCreation,
  showToast
} from '../../redux/actions';
import Spinner from '../../components/spinner/Spinner';
import ImageModule from '../../components/modules/ImageModule';
import ImageQuizModule from '../../components/modules/ImageQuizModule';
import MapModule from '../../components/modules/MapModule';
import QuizModule from '../../components/modules/QuizModule';
import SearchExerciseModule from '../../components/modules/SearchExerciseModule';
import TextblockModule from '../../components/modules/TextblockModule';
import VideoModule from '../../components/modules/VideoModule';
import YoutubeModule from '../../components/modules/YoutubeModule';
import FunFactModule from '../../components/modules/FunFactModule';
import AppSuggestions from '../../components/appsuggestions/AppSuggestions';
import UploadBox from '../../components/uploadbox/UploadBox';
import Button from '../../components/button/Button';

class Room extends React.Component {
  handleChange(module) {
    this.props.updateModule(module);
  }

  componentWillMount() {
    this.props.joinRoom();
    this.props.fetchRoomData();
  }

  render() {
    const {
      room,
      user,
      creation,
      isFetchingData,
      suggestions,
      sendCreation,
      addDescriptionToCreation,
      showToast
    } = this.props;

    if (isFetchingData || !room.modules) return <Spinner page size="large" />;

    return (
      <div className="room container">
        <div className="story-information card" style={{ width: '550px' }}>
          <img
            className="card-img-top"
            src={room.profilePicture}
            alt={room.name}
          />
          <div className="card-block">
            <h1 className="card-title">
              {room.name}
            </h1>
            <p>
              {moment(room.birthdate, 'DD-MM-YYYY').format('DD/MM/YYYY') +
                ' - ' +
                moment(room.died, 'DD-MM-YYYY').format('DD/MM/YYYY')}
            </p>
            <p>
              {room.nationality}
            </p>
          </div>
          <div className="card-block">
            Leeftijd{' '}
            {moment(room.died, 'DD-MM-YYYY').diff(
              moment(room.birthdate, 'DD-MM-YYYY').format(''),
              'years'
            )}
          </div>
        </div>
        <div className="modules">
          {room.modules &&
            room.modules.map((module, i) => {
              switch (module.contentType.toLowerCase()) {
                case 'image':
                  return (
                    <ImageModule
                      index={i}
                      key={i}
                      module={module}
                      users={room.users}
                      user={user}
                    />
                  );
                case 'imagequiz':
                  return (
                    <ImageQuizModule
                      index={i}
                      key={i}
                      module={module}
                      users={room.users}
                      user={user}
                      handleChange={this.handleChange.bind(this)}
                    />
                  );
                case 'map':
                  return (
                    <MapModule
                      index={i}
                      key={i}
                      module={module}
                      users={room.users}
                      user={user}
                      handleChange={this.handleChange.bind(this)}
                    />
                  );
                case 'quiz':
                  return (
                    <QuizModule
                      index={i}
                      key={i}
                      module={module}
                      users={room.users}
                      user={user}
                      handleChange={this.handleChange.bind(this)}
                    />
                  );
                case 'searchex':
                  return (
                    <SearchExerciseModule
                      index={i}
                      key={i}
                      module={module}
                      users={room.users}
                      user={user}
                    />
                  );
                case 'textblock':
                  return (
                    <TextblockModule
                      index={i}
                      key={i}
                      module={module}
                      users={room.users}
                      user={user}
                    />
                  );
                case 'video':
                  return (
                    <VideoModule
                      index={i}
                      key={i}
                      module={module}
                      users={room.users}
                      user={user}
                    />
                  );
                case 'youtube':
                  return (
                    <YoutubeModule
                      index={i}
                      key={i}
                      module={module}
                      users={room.users}
                      user={user}
                    />
                  );
                case 'funfact':
                  return (
                    <FunFactModule
                      index={i}
                      key={i}
                      module={module}
                      users={room.users}
                      user={user}
                    />
                  );
                default:
                  return <div key={i} />;
              }
            })}
        </div>
        <AppSuggestions {...suggestions} />
        <UploadBox />
        <textarea
          name="creation-description"
          onChange={addDescriptionToCreation}
          id="creation-description"
          cols="30"
          rows="10"
        />
        {creation.photoURL &&
          !room.isSubmitted &&
          <Button onClick={sendCreation}>Verzend</Button>}
        {room.isSubmitted &&
          <div>
            <input
              type="text"
              ref={creationUrlInput => {
                this.creationUrlInput = creationUrlInput;
              }}
              id="creation-url"
              name="creation-url"
              value={creation.photoURL}
              readOnly
            />
            <Button
              onClick={_ => {
                this.creationUrlInput.select();
                document.execCommand('copy');
                showToast({
                  text:
                    'De link naar jouw snipper is gekopieërd naar jouw klembord'
                });
              }}
            >
              Share
            </Button>
          </div>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  room: state.room,
  user: state.user,
  suggestions: state.suggestions,
  modal: state.modal,
  creation: state.creation,
  toast: state.toast
});

export default connect(mapStateToProps, {
  fetchRoomData,
  listenForRoomChange,
  updateModule,
  getRandomSuggestions,
  joinRoom,
  sendCreation,
  addDescriptionToCreation,
  showToast
})(Room);
