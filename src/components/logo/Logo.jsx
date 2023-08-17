import React from 'react';
import { Link } from 'react-router-dom';

import './logo.scss';

import logo from '../../img/logo.svg';
import logoWhite from '../../img/logoWhite.svg';

const Logo = ({ theme }) => {
  return (
    <Link to="/" className={theme == 'light' ? 'logo' : 'logoWhite'}>
      <div className="logo__img">
        <img src={theme == 'light' ? logo : logoWhite} alt="logo" />
      </div>
      VAC
    </Link>
  );
};

export default Logo;
