import React from "react";
import moment from "moment";
import { connect } from "react-redux";
import { User } from "react-feather";
import {
  fetchRoomData,
  listenForRoomChange,
  updateModule,
  getRandomSuggestions,
  joinRoom,
  sendCreation,
  changeUsernameCurrentUser,
  showToast
} from "../../../redux/actions";
import { parse } from 'query-string';
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
import AppSuggestions from '../../../components/appsuggestions/AppSuggestions';
import Button from '../../../components/button/Button';
import StapLogo from './assets/stap02.svg';
import Navbar from '../../../components/nav/Navbar';
import Footer from '../../../components/footer/Footer';

import StepIndicator from '../../../components/step-indicator/StepIndicator';
import FloatingSteps from '../../../components/step-indicator/FloatingSteps';
import FloatingNext from '../../../components/step-indicator/FloatingNext';

class Room extends React.Component {
  handleChange(module) {
    this.props.updateModule(module);
  }

  componentWillMount() {
    const { joinRoom, fetchRoomData, location: { search } } = this.props;
    joinRoom();
    fetchRoomData();
    const queryString = parse(search);
    this.setState({ storyId: queryString.storyId });
  }

  render() {
    const {
      room,
      user,
      isFetchingData,
      suggestions,
      changeUsernameCurrentUser,
      showToast
    } = this.props;
    const { storyId } = this.state;

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
        <div className="container room" style={{ position: "relative" }}>
          <div
            className="users"
            style={{
              position: "absolute",
              right: "0",
              top: "2em",
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            {Object.keys(room.users).length > 1 &&
              <div>
                <h2>Mensen in dit verhaal</h2>
                {Object.keys(room.users).map(key => {
                  return (
                    <div key={key} style={{ verticalAlign: "center" }}>
                      <User />
                      {room.users[key]}
                    </div>
                  );
                })}
              </div>}
            <h3>Nodig iemand uit om mee te werken:</h3>
            <input
              type="text"
              value={window.location.href}
              readOnly
              ref={inviteInput => {
                this.inviteInput = inviteInput;
              }}
              onClick={e => e.target.select()}
            />
            <Button
              onClick={_ => {
                this.inviteInput.select();
                document.execCommand("copy");
                showToast({
                  text: `De link is gekopieerd naar jouw klembord, stuur het naar je vrienden!`
                });
              }}
            >
              Kopiëer
            </Button>
          </div>
          <div className="story-information card" style={{ width: "550px" }}>
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
                {moment(room.birthdate, "DD-MM-YYYY").format("DD/MM/YYYY") +
                  " - " +
                  moment(room.died, "DD-MM-YYYY").format("DD/MM/YYYY")}
              </p>
              <p>
                {room.nationality}
              </p>
            </div>
            <div className="card-block">
              Leeftijd{" "}
              {moment(room.died, "DD-MM-YYYY").diff(
                moment(room.birthdate, "DD-MM-YYYY").format(""),
                "years"
              )}
            </div>
            <label htmlFor="personName">Wie ben jij?</label>
            <input
              type="text"
              name="personName"
              onChange={changeUsernameCurrentUser}
            />
          </div>
          <div className="modules">
            {room.modules &&
              room.modules.map((module, i) => {
                switch (module.contentType.toLowerCase()) {
                  case "image":
                    return (
                      <ImageModule
                        index={i}
                        key={i}
                        module={module}
                        users={room.users}
                        user={user}
                      />
                    );
                  case "imagequiz":
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
                  case "map":
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
                  case "quiz":
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
                  case "searchex":
                    return (
                      <SearchExerciseModule
                        index={i}
                        key={i}
                        module={module}
                        users={room.users}
                        user={user}
                      />
                    );
                  case "textblock":
                    return (
                      <TextblockModule
                        index={i}
                        key={i}
                        module={module}
                        users={room.users}
                        user={user}
                      />
                    );
                  case "video":
                    return (
                      <VideoModule
                        index={i}
                        key={i}
                        module={module}
                        users={room.users}
                        user={user}
                      />
                    );
                  case "youtube":
                    return (
                      <YoutubeModule
                        index={i}
                        key={i}
                        module={module}
                        users={room.users}
                        user={user}
                      />
                    );
                  case "funfact":
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
          <Button to={'/knutseltips'}>Knutsel iets bij dit verhaal</Button>
          <FloatingNext
            to={`/knutseltips?storyId=${storyId}`}
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
