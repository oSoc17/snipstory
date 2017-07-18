import React from 'react';
import { Link } from 'react-router-dom';
import './Navlink.css';

const Navlink = ({ children = '', ...props }) => {
  return (
    <Link className="navlink" {...props}>
      {children}
    </Link>
  );
};

export default Navlink;
