import React from 'react';
//import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import './Navlink.css';

const Navlink = ({ children = '', ...props }) => {
  return (
    <Link className="navlink" {...props}>
      {children}
    </Link>
  );
};

export default Navlink;
