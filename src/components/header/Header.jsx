import React from 'react';
import Logo from '../logo/Logo';

import LinkSolid from '../../UI/links/linkSolid/LinkSolid';
import LinkLiner from '../../UI/links/linkLiner/LinkLiner';

import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__container">
          <Logo />
          <div className="header__wrapper">
            <div className="header__links">
              <LinkLiner to={'/'} wx={137}>
                Inventory
              </LinkLiner>
              <LinkSolid to={'/'} wx={200} wm={178} ws={130}>
                Request a car
              </LinkSolid>
            </div>
            <div className="header__burger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
