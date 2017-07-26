import React from 'react';
import './Creations1.css';
import { history } from '../../redux/store';

const Creations1 = ({ snipper }) => {
  return (
    <div>
      <div
        className="card card-container"
        onClick={e => history.push(`/snippers/${snipper.id}`)}
      >
        {snipper.fileType === 'video'
          ? <video autoPlay controls src={snipper.photoURL} />
          : <img
              src={snipper.photoURL}
              alt={`Snipper van ${snipper.creators}`}
              className="img-fluid card-img"
            />}
        <div className="card-block">
          <h4 className="card-title">
            {snipper.description}
          </h4>
          <p className="card-text">
            Geknutseld door {snipper.creators}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Creations1;
