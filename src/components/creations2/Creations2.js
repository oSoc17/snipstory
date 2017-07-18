import React from 'react';
import Button from '../button/Button';

import TestPhoto from '../../containers/views/Home/assets/test-photo-2.png';
import './Creations2.css';

const Creations2 = () => {
  return (
    <article className="article-container-2">
      <div className="creation-container-2">
        <img src={TestPhoto} alt="" className="img-mapping-2" />
        <h2 className="article-title title-2">
          Door Eli Lambert, Charlotte Roels, Olivia Severs & Noora de Grote
        </h2>
        <p className="article-para para-2">
          We hebben een filmpje gemaakt rond Thomas Reddy
        </p>
      </div>
      <Button inverted to="/">
        Ontdek dit verhaal zelf
      </Button>
    </article>
  );
};

export default Creations2;
