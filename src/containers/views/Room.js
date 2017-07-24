import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import {
  fetchRoomData,
  listenForRoomChange,
  updateModule,
  getRandomSuggestions,
  joinRoom,
  sendCreation
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

import StepIndicator from '../../components/step-indicator/StepIndicator';

import './Room.css';

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
      sendCreation
    } = this.props;

    if (isFetchingData || !room.modules) return <Spinner page size="large" />;

    return (
      <div className="room container">
        <StepIndicator
          step={2}
          title="Ontdek het verhaal"
          description="Ontdek verschillende historische figuren aan de hand van hun levensverhaal"
          image="https://placehold.it/300x300"
        />
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
        <div className="monument">
          <div className="card">
            <img className="card-img-top img-fluid" src="" alt=""/>
            <div className="card-block">
              <h4 className="card-title">Berks Cemetery Extension</h4>
              <div className="card-text">Dit is het kerkhof waar Thomas Reddy ligt. ...</div>
            </div>
            <div className="card-block">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d464080.155903431!2d3.7196314851131245!3d50.837424137856935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dcd13a8343e7cb%3A0x165e0d20e0d33dbd!2sBerks+Cemetery+Extension!5e0!3m2!1sen!2sbe!4v1500664894963" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
            </div>
          </div>
        </div>
        <AppSuggestions {...suggestions} />
        <UploadBox />
        {creation.photoURL &&
          !room.isSubmitted &&
          <Button
            onClick={_ => {
              sendCreation();
            }}
          >
            Verzend
          </Button>}
        {room.isSubmitted &&
          <Button to={'/snipper/' + creation.id}>Ga naar jou snipper!</Button>}
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
  sendCreation
})(Room);
