import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listenToFirebaseAuth } from '../redux/actions';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import ProtectedRoute from '../components/auth/ProtectedRoute';
import Home from './views/Home';
import CharacterQuiz from './views/CharacterQuiz';
import TeacherArea from './views/TeacherArea';
import Login from './views/Login';
import Register from './views/Register';
import CreateRoom from './views/CreateRoom';
import StorySelect from './views/StorySelect';
import Room from './views/Room';
import './App.css';

class App extends Component {
  componentWillMount() {
    this.props.listenToFirebaseAuth();
  }

  render() {
    const { history, user } = this.props;
    const isAuthorizedTeacher = user.isAuthorized && !user.authPending;

    if (user.authPending) {
      return <div>Loading...</div>;
    }

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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  room: state.room
});

export default connect(mapStateToProps, { listenToFirebaseAuth })(App);
