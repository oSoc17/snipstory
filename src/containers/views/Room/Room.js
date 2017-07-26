import React from 'react';
import { connect } from 'react-redux';
import {
  fetchRoomData,
  listenForRoomChange,
  updateModule,
  getRandomSuggestions,
  joinRoom,
  sendCreation,
  changeUsernameCurrentUser,
  showToast
} from '../../../redux/actions';
import Spinner from '../../../components/spinner/Spinner';
import ImageModule from '../../../components/modules/ImageModule';
import ImageQuizModule from '../../../components/modules/ImageQuizModule';
import MapModule from '../../../components/modules/MapModule';
import QuizModule from '../../../components/modules/QuizModule';
import SearchExerciseModule from '../../../components/modules/SearchExerciseModule';
import TextblockModule from '../../../components/modules/TextblockModule';
import VideoModule from '../../../components/modules/VideoModule';
import YoutubeModule from '../../../components/modules/YoutubeModule';
import FunFactModule from '../../../components/modules/FunFactModule';
import StapLogo from './assets/stap02.svg';
import Navbar from '../../../components/nav/Navbar';
import Footer from '../../../components/footer/Footer';

import StepIndicator from '../../../components/step-indicator/StepIndicator';
import FloatingSteps from '../../../components/step-indicator/FloatingSteps';
import FloatingNext from '../../../components/step-indicator/FloatingNext';
import WorkTogether from '../../../components/work-together/WorkTogether';

import './Room.css';

class Room extends React.Component {
  state = { workTogetherExpanded: false };
  handleChange(module) {
    this.props.updateModule(module);
  }

  componentWillMount() {
    const { joinRoom, fetchRoomData } = this.props;
    joinRoom();
    fetchRoomData();
  }

  render() {
    const {
      room,
      user,
      isFetchingData,
      changeUsernameCurrentUser,
      showToast
    } = this.props;

    if (isFetchingData || !room.modules) return <Spinner page size="large" />;

    return (
      <div className="page">
        <Navbar />
        <StepIndicator
          step={2}
          title="Ontdek het verhaal"
          description="Ontdek verschillende historische figuren aan de hand van hun levensverhaal"
          image={StapLogo}
        />
        <div className=" room ">
          <div className="story-information__wrapper">
            <div className="story-information card">
              <div className="card-block block-width card-block--story-head">
                <h1 className="card-title">
                  {room.name}
                </h1>

                <p className="card-text">
                  {room.description}
                </p>
                <p className="card-text">
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
                  {room.birthdate}
                </p>
                <p className="card-text">
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
                  {room.died}
                </p>
                <p className="card-text">
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
                  {room.nationality}
                </p>
              </div>
              <img
                className="card-img-top-2"
                src={room.profilePicture}
                alt={room.name}
              />
            </div>
          </div>

          <WorkTogether
            users={room.users}
            showToast={showToast}
            expanded={this.state.workTogetherExpanded}
            changeUsernameCurrentUser={changeUsernameCurrentUser}
            onExpand={() => {
              this.setState(prevState => ({
                ...prevState,
                workTogetherExpanded: !prevState.workTogetherExpanded
              }));
            }}
          />
<<<<<<< HEAD
=======
          <div className="story-information card">
            <div className="card-block block-width">
              <h1 className="card-title">
                {room.name}
              </h1>

              <p className="card-text">
                {room.description}
              </p>
              <p className="card-text">
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
                {room.birthdate}
              </p>
              <p className="card-text">
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
                {room.died}
              </p>
              <p className="card-text">
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
                {room.nationality}
              </p>
            </div>
            <img
              className="card-img-top-2"
              src={room.profilePicture}
              alt={room.name}
            />
          </div>
          <div className="card-block">
            <label className="personName-label" htmlFor="personName">
              Wie ben jij?
            </label>
            <input
              className="form-field__input"
              type="text"
              name="personName"
              id="personName"
              onChange={changeUsernameCurrentUser}
            />
          </div>
>>>>>>> 4578aa474e6511118757a02c5f15dfad5002aeb9

          <div className="modules content-container">
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
          <div
            className="card monument"
            style={{
              width: '45em',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <img
              className="img-fluid card-img-top"
              src={room.monument.image}
              alt={room.monument.name}
            />
            <div className="card-block">
              <h4 className="card-title">
                {room.monument.name}
              </h4>
              <div className="card-text monument-text">
                {room.monument.text}
              </div>
              <iframe
                src={room.monument.googleMapsEmbed}
                width="100%"
                height="350"
                frameBorder="0"
                title="monument map"
                style={{ border: 0 }}
                allowFullScreen
              />
            </div>
          </div>
          <FloatingNext
            to={`/knutseltips?storyId=${room.storyId}`}
            nextStep="Knutsel"
          />
          <FloatingSteps activeStep={1} />
        </div>
        <Footer />
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
  changeUsernameCurrentUser,
  showToast
})(Room);
