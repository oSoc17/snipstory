import React from 'react';
import moment from 'moment';
import { firebaseAuth } from '../../helpers/firebase';
import { connect } from 'react-redux';
import {
  fetchRoomData,
  listenForRoomChange,
  updateModule,
  getRandomSuggestions
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

class Room extends React.Component {
  handleChange(module) {
    this.props.updateModule(module);
  }

  componentWillMount() {
    const user = firebaseAuth.currentUser;
    if (!user) {
      firebaseAuth.signInAnonymously().then(user => {}).catch(err => {});
    }
    this.props.fetchRoomData();
  }

  render() {
    const { room, user, isFetchingData, suggestions } = this.props;

    if (isFetchingData || !room.modules) return <Spinner page size="large" />;

    return (
      <div className="room">
        <div className="story-information">
          <img src={room.profilePicture} alt="" />
          <h1>
            {room.name}
          </h1>
          <h2>
            {moment(room.birthdate, 'DD-MM-YYYY').format('DD/MM/YYYY') +
              ' - ' +
              moment(room.died, 'DD-MM-YYYY').format('DD/MM/YYYY')}
          </h2>
          <h3>
            {room.nationality}
          </h3>
          <div>
            Leeftijd
            <div>
              {moment(room.died, 'DD-MM-YYYY').diff(
                moment(room.birthdate, 'DD-MM-YYYY').format(''),
                'years'
              )}
            </div>
          </div>
        </div>
        <div className="modules">
          {room.modules &&
            room.modules.map((module, i) => {
              console.log(module);
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  room: state.room,
  user: state.user,
  suggestions: state.suggestions
});

export default connect(mapStateToProps, {
  fetchRoomData,
  listenForRoomChange,
  updateModule,
  getRandomSuggestions
})(Room);
