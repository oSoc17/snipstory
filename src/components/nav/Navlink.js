import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Navlink.css';

const Navlink = ({ children = '', to, ...props }) => {
  if (to.indexOf('#') !== -1) {
    return (
      <HashLink to={to} className="navlink" {...props}>
        {children}
      </HashLink>
    );
  }
  return (
    <NavLink className="navlink" to={to} activeClassName="active" {...props}>
      {children}
    </NavLink>
  );
};

export default Navlink;
