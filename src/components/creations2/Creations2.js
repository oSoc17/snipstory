import React from 'react';
import Button from '../button/Button';
import { history } from '../../redux/store';
import './Creations2.css';

const Creations2 = ({ snipper }) => {
  return (
    <article className="article-container-1">
      <div
        className="creations-container-2"
        onClick={e => history.push(`/snippers/${snipper.id}`)}
      >
        <img
          src={snipper.photoURL}
          alt={`Snipper van ${snipper.creators}`}
          className="img-mapping-2"
        />
        <div>
          <h2 className="article-title title-2">
            Door {snipper.creators}
          </h2>
          <p className="article-para para-2">
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

export default Creations2;
