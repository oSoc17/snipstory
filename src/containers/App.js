import React, { Component } from 'react';
import { connect } from 'react-redux';
import { test } from '../redux/actions';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.test();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>iShare</h2>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  room: state.room
});

export default connect(mapStateToProps, { test })(App);
