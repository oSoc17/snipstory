import React from 'react';
import { firebaseDatabase } from '../../helpers/firebase';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  loadRandomStories() {
    firebaseDatabase.ref('/stories').once('value').then(snapshot => {
      snapshot.val();
    });
  }

  render() {
    return (
      <div>
        <div className="page">
          <button value="teacher">Teacher</button>
          <Link to="/quiz">Start</Link>
          <div className="filters" />
        </div>
        <div className="page">loadRandomStories().map(story => )</div>
      </div>
    );
  }
}

export default Home;
