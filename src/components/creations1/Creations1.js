import React from 'react';
import Button from '../button/Button';
import './Creations1.css';
import { history } from '../../redux/store';

const Creations1 = ({ snipper }) => {
  return (
    <div>
      <div
        className="card card-container"
        onClick={e => history.push(`/snippers/${snipper.id}`)}
      >
        <img
          src={snipper.photoURL}
          alt={`Snipper van ${snipper.creators}`}
          className="img-fluid card-img"
        />
        <div className="card-block">
          <h4 className="card-title">
            {snipper.description}
          </h4>
          <p className="card-text">
            Geknutseld door {snipper.creators}
          </p>
        </div>
      </div>
      <Button
        className="button"
        inverted
        to={`/story/select?id=${snipper.storyId}`}
      >
        Ontdek dit verhaal zelf
      </Button>
    </div>
  );
};

export default Creations1;
