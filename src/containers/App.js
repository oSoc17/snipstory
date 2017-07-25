import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import {
  showToast,
  destroyToast,
  listenToFirebaseAuth
} from '../redux/actions';
import ProtectedRoute from '../components/auth/ProtectedRoute';
import Home from './views/Home/Home';
import TeacherArea from './views/TeacherArea';
import Login from '././views/Login/Login';
import Register from './views/Register/Register';
import CreateRoom from './views/CreateRoom';
import KnutselTips from './views/KnutselTips/KnutselTips';
import StorySelect from './views/StorySelect/StorySelect';
import Toast from '../components/toast/Toast';
import Spinner from '../components/spinner/Spinner';
import Room from './views/Room/Room';
import CreateStory from './views/CreateStory';
import Snippers from './views/Snippers';
import SnipperDetail from './views/SnipperDetail';
import Share from './views/Share/Share';
import deepEqual from 'deep-equal';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.listenToFirebaseAuth();
  }

  shouldComponentUpdate(nextProps) {
    return !deepEqual(this.props, nextProps, { strict: true });
  }

  render() {
    const {
      history,
      user,
      toast: { toastActive, ...toast },
      showToast,
      destroyToast
    } = this.props;
    const isAuthorized = user.isAuthorized;

    if (user.authPending || !user || user.initial) {
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
              path="/story/share"
              exact
              render={props => <Share user={user} {...props} />}
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
            <Route
              path="/knutseltips"
              render={props => <KnutselTips user={user} {...props} />}
            />
            <Route
              path="/snippers"
              exact
              render={props => <Snippers user={user} {...props} />}
            />
            <Route
              path="/snippers/:snipperId"
              exact
              render={props =>
                <SnipperDetail showToast={showToast} user={user} {...props} />}
            />
            <ProtectedRoute
              path="/teacher/stories/create"
              isAuthorized={isAuthorized}
              redirectUrl="/teacher/login"
              exact
              render={props => <CreateStory user={user} {...props} />}
            />
            <ProtectedRoute
              path="/teacher"
              isAuthorized={isAuthorized}
              redirectUrl="/teacher/login"
              exact
              render={props => <TeacherArea user={user} {...props} />}
            />
            <ProtectedRoute
              path="/teacher/login"
              isAuthorized={!isAuthorized}
              redirectUrl="/teacher"
              exact
              render={props =>
                <Login user={user} showToast={showToast} {...props} />}
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
  listenToFirebaseAuth
})(App);
