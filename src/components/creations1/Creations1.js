import React from 'react';
import Button from '../button/Button';
import TestPhoto from '../../containers/views/Home/assets/test-photo.jpg';
import './Creations1.css';

const Creations1 = () => {
  return (
    <article className="">
      <div className="">
        <img src={TestPhoto} alt="" className="img-fluid" />
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
