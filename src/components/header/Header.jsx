import React, { useState } from 'react';
import Logo from '../logo/Logo';
const Modal = React.lazy(() => import('../modal/Modal'));

import LinkSolid from '../../UI/links/linkSolid/LinkSolid';
import LinkLiner from '../../UI/links/linkLiner/LinkLiner';

import './header.scss';

const Header = () => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    if (!modal) {
      setModal(!modal);
    }
  };

  const closeModal = () => {
    if (modal) {
      setModal(!modal);
    }
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__container">
            <Logo theme={'light'} />
            <div className="header__wrapper">
              <div className="header__links">
                <LinkLiner to={'/'} wx={137}>
                  Inventory
                </LinkLiner>
                <LinkSolid to={'/'} wx={200} wm={178} ws={130}>
                  Request a car
                </LinkSolid>
              </div>
              <div className="header__burger" style={{ opacity: `${modal ? '0' : '1'}` }} onClick={openModal}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Modal state={modal} onClick={closeModal} />
    </>
  );
};

export default Header;
