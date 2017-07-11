import React, { Component } from 'react';
import { connect } from 'react-redux';
import { test } from '../redux/actions';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import Home from './views/Home';
import CharacterQuiz from './views/CharacterQuiz';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.test();
  }

  render() {
    const { history, user } = this.props;

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
              render={props => <CharacterQuiz user={user} {...props} />}
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

export default connect(mapStateToProps, { test })(App);
