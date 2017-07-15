import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { showToast, destroyToast } from '../redux/actions';
import ProtectedRoute from '../components/auth/ProtectedRoute';
import Home from './views/Home';
import CharacterQuiz from './views/CharacterQuiz';
import TeacherArea from './views/TeacherArea';
import CreateRoom from './views/CreateRoom';
import StorySelect from './views/StorySelect';
import Toast from '../components/toast/Toast';
import Room from './views/Room';
import './App.css';

class App extends Component {
  componentDidMount() {}

  render() {
    const {
      history,
      user,
      toast: { toastActive, ...toast },
      // showToast,
      destroyToast
    } = this.props;
    const isAuthorizedTeacher = user.isAuthorized && user.token;

    return (
      <div className="app">
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
              exact
              render={() => <div>login</div>}
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
  toast: state.toast
});

export default connect(mapStateToProps, { showToast, destroyToast })(App);
