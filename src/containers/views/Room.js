import React from 'react';
import { connect } from 'react-redux';
import ImageModule from '../../components/modules/ImageModule';
import ImageQuizModule from '../../components/modules/ImageQuizModule';
import MapModule from '../../components/modules/MapModule';
import QuizModule from '../../components/modules/QuizModule';
import SearchExerciseModule from '../../components/modules/SearchExerciseModule';
import TextblockModule from '../../components/modules/TextblockModule';
import VideoModule from '../../components/modules/VideoModule';
import YoutubeModule from '../../components/modules/YoutubeModule';
import { test } from '../../redux/actions';

class Room extends React.Component {
  handleChange(module, index) {
    console.log('module ', index, ':', module);
  }

  render() {
    const { room, user } = this.props;
    return (
      <div className="room">
        <div className="story-information">
          <img src="" alt={'name'} />
          <h1>
            {'name'}
          </h1>
        </div>
        <div className="modules">
          {room.modules.map((module, i) => {
            switch (module.contentType) {
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
              default:
                <div />;
            }
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  room: state.room,
  user: state.user
});

export default connect(mapStateToProps, { test })(Room);
