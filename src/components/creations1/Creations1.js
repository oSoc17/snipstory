import React from 'react';
import Button from '../button/Button';
import './Creations1.css';
import { history } from '../../redux/store';

const Creations1 = ({ snipper }) => {
  return (
    <article className="article-container-1">
      <div
        className="creations-container-1"
        onClick={e => history.push(`/snippers/${snipper.id}`)}
      >
        <img
          src={snipper.photoURL}
          alt={`Snipper van ${snipper.creators}`}
          className="img-mapping-1"
        />
        <div>
          <h2 className="article-title">
            Door {snipper.creators}
          </h2>
          <p className="article-para">
            {snipper.description}
          </p>
        </div>
      </div>
      <Button inverted to={`/story/select?id=${snipper.storyId}`}>
        Ontdek dit verhaal zelf
      </Button>
    </article>
  );
};

export default Creations1;
