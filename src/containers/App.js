import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import {
  showToast,
  destroyToast,
  showModal,
  destroyModal,
  listenToFirebaseAuth
} from '../redux/actions';
import ProtectedRoute from '../components/auth/ProtectedRoute';
import Home from './views/Home';
import CharacterQuiz from './views/CharacterQuiz';
import TeacherArea from './views/TeacherArea';
import Login from './views/Login';
import Register from './views/Register';
import CreateRoom from './views/CreateRoom';
import StorySelect from './views/StorySelect';
import Toast from '../components/toast/Toast';
import Spinner from '../components/spinner/Spinner';
import Room from './views/Room';
import Modal from '../components/modal/Modal';
import './App.css';

class App extends Component {
  componentWillMount() {
    this.props.listenToFirebaseAuth();
  }

  render() {
    const {
      history,
      user,
      toast: { toastActive, ...toast },
      // showToast,
      destroyToast
    } = this.props;
    const isAuthorizedTeacher = user.isAuthorized && user.token;

    if (user.authPending) {
      return <Spinner page size="large" />;
    }

    return (
      <div id="app" className="app">
        <ConnectedRouter history={history}>
          <Switch>
            <Route
              path="/"
              exact
              render={props => <Home user={user} {...props} />}
            />
            <Route
              path="/quiz"
              exact
              render={props => <CharacterQuiz user={user} {...props} />}
            />
            <Route
              path="/teacher/register"
              exact
              render={props => <Register user={user} {...props} />}
            />
            <Route
              path="/story/select"
              exact
              render={props => <StorySelect user={user} {...props} />}
            />
            <Route
              path="/rooms/create"
              exact
              render={props => <CreateRoom user={user} {...props} />}
            />
            <Route
              path="/rooms/:roomId"
              exact
              render={props => <Room user={user} {...props} />}
            />
            <ProtectedRoute
              path="/teacher"
              isAuthorized={isAuthorizedTeacher}
              redirectUrl="/teacher/login"
              exact
              render={props => <TeacherArea user={user} {...props} />}
            />
            <ProtectedRoute
              path="/teacher/login"
              isAuthorized={!isAuthorizedTeacher}
              redirectUrl="/teacher"
              exact
              render={props => <Login user={user} {...props} />}
            />
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </ConnectedRouter>
        {toastActive && <Toast destroyToast={destroyToast} {...toast} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  room: state.room,
  toast: state.toast,
  modal: state.modal
});

export default connect(mapStateToProps, {
  showToast,
  destroyToast,
  showModal,
  destroyModal,
  listenToFirebaseAuth
})(App);
