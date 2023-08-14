import React from 'react';
import { Link } from 'react-router-dom';

import './logo.scss';

import logo from '../../img/logo.svg';

const Logo = () => {
  return (
    <Link to="/" className="logo">
      <div className="logo__img">
        <img src={logo} alt="logo" />
      </div>
      VAC
    </Link>
  );
};

export default Logo;
