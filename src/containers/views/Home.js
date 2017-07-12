import React from 'react';
import Button from '../../components/button/Button';
import { MapPin } from 'react-feather';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="page">
          <button value="teacher">Teacher</button>
          <Link to="/story/select">Ontdek een verhaal</Link>
        </div>
      </div>
    );
  }
}

export default Home;
