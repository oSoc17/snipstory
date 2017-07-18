import React from 'react';
import Button from '../button/Button';
import TestPhoto from '../../containers/views/Home/assets/test-photo.jpg';
import './Creations1.css';

const Creations1 = () => {
  return (
    <article className="article-container-1">
      <div className="creations-container-1">
        <img src={TestPhoto} alt="" className="img-mapping-1" />
        <div>
          <h2 className="article-title">
            Door Eli Lambert, Charlotte Roels, Olivia Severs & Noora de Grote
          </h2>
          <p className="article-para">
            We hebben een filmpje gemaakt rond Thomas Reddy
          </p>
        </div>
      </div>
      <Button inverted to="/">
        Ontdek dit verhaal zelf
      </Button>
    </article>
  );
};

export default Creations1;
