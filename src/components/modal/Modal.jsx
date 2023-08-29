import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import BtnSolid from '../../UI/button/buttonSolid/BtnSolid';

import './index.scss';

const Modal = ({ state, onClick }) => {
  const [modalView, setModal] = useState(0);

  useEffect(() => {
    if (state) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [state]);

  const openContactUs = () => {
    setModal(1);
  };

  const closeContactUs = () => {
    setModal(0);
  };

  const submitForm = e => {
    let count = 0;
    const obj = { ...e.target.parentNode.parentNode.elements };

    for (const key in obj) {
      if (Object.hasOwnProperty.call(obj, key)) {
        if (obj[key].value != '') {
          count++;
        }
      }
    }

    console.log(obj, count);

    if (count == 6) {
      setModal(2);
    }
  };

  return (
    <div className={`overlay ${state ? 'overlay_show' : ''}`}>
      {modalView == 0 ? modal() : modalView == 1 ? contactUs() : modalView == 2 ? success() : ''}
    </div>
  );

  function modal() {
    return (
      <div className="modal">
        <div className="close" onClick={onClick}>
          <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.41879 24.5858C0.637746 25.3669 0.637746 26.6332 1.41879 27.4143C2.19984 28.1953 3.46617 28.1953 4.24722 27.4143L14.4188 17.2427L24.7533 27.5772C25.5344 28.3582 26.8007 28.3582 27.5817 27.5772C28.3628 26.7962 28.3628 25.5298 27.5817 24.7488L17.2472 14.4143L27.5817 4.07974C28.3628 3.29869 28.3628 2.03236 27.5817 1.25131C26.8007 0.470265 25.5344 0.470265 24.7533 1.25131L14.4188 11.5858L4.24722 1.41425C3.46617 0.633204 2.19984 0.633204 1.41879 1.41425C0.637745 2.1953 0.637746 3.46163 1.41879 4.24268L11.5904 14.4143L1.41879 24.5858Z"
              fill="#41456B"
            />
          </svg>
        </div>
        <div className="modal__list">
          <div className="modal__list-item" onClick={openContactUs}>
            Contact us
          </div>
          <Link to="/about" className="modal__list-item" onClick={onClick}>
            About VAC
          </Link>
          <Link to="/loan-rates" className="modal__list-item" onClick={onClick}>
            Loan Rates
          </Link>
          <Link to="/video" className="modal__list-item" onClick={onClick}>
            Video
          </Link>
          <Link to="/blog" className="modal__list-item" onClick={onClick}>
            Blog
          </Link>
          <Link to="/calculator" className="modal__list-item" onClick={onClick}>
            Calculate
          </Link>
        </div>
        <div className="modal__social">
          <a href="#" className="modal__link">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="30" height="30" rx="2" fill="#7481FF" />
              <path
                d="M14.8573 10.6956C12.5992 10.6956 10.7283 12.5343 10.7283 14.8246C10.7283 17.1149 12.567 18.9536 14.8573 18.9536C17.1476 18.9536 18.9863 17.0827 18.9863 14.8246C18.9863 12.5665 17.1154 10.6956 14.8573 10.6956ZM14.8573 17.4697C13.4057 17.4697 12.2121 16.2762 12.2121 14.8246C12.2121 13.373 13.4057 12.1794 14.8573 12.1794C16.3089 12.1794 17.5025 13.373 17.5025 14.8246C17.5025 16.2762 16.3089 17.4697 14.8573 17.4697Z"
                fill="white"
              />
              <path
                d="M19.1501 11.5343C19.6667 11.5343 20.0856 11.1155 20.0856 10.5988C20.0856 10.0822 19.6667 9.66333 19.1501 9.66333C18.6334 9.66333 18.2146 10.0822 18.2146 10.5988C18.2146 11.1155 18.6334 11.5343 19.1501 11.5343Z"
                fill="white"
              />
              <path
                d="M21.5669 8.17976C20.7281 7.30879 19.5346 6.85718 18.1798 6.85718H11.5346C8.72815 6.85718 6.85718 8.72815 6.85718 11.5346V18.1475C6.85718 19.5346 7.30879 20.7281 8.21202 21.5991C9.08298 22.4378 10.2443 22.8572 11.5669 22.8572H18.1475C19.5346 22.8572 20.6959 22.4056 21.5346 21.5991C22.4056 20.7604 22.8572 19.5669 22.8572 18.1798V11.5346C22.8572 10.1798 22.4056 9.01847 21.5669 8.17976ZM21.4378 18.1798C21.4378 19.1798 21.083 19.9862 20.5023 20.5346C19.9217 21.083 19.1152 21.3733 18.1475 21.3733H11.5669C10.5991 21.3733 9.79266 21.083 9.21202 20.5346C8.63137 19.954 8.34105 19.1475 8.34105 18.1475V11.5346C8.34105 10.5669 8.63137 9.7604 9.21202 9.17976C9.7604 8.63137 10.5991 8.34105 11.5669 8.34105H18.212C19.1798 8.34105 19.9862 8.63137 20.5669 9.21202C21.1152 9.79266 21.4378 10.5991 21.4378 11.5346V18.1798Z"
                fill="white"
              />
            </svg>
          </a>
          <a href="#" className="modal__link">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="30" height="30" rx="2" fill="#7481FF" />
              <path
                d="M17.9557 22.4945V15.6079H20.2857L20.8683 12.7385H17.9557V11.5908C17.9557 10.443 18.5394 9.86915 19.7032 9.86915H20.8683V6.99976C20.2857 6.99976 19.5634 6.99976 18.5382 6.99976C16.3975 6.99976 15.0432 8.6531 15.0432 11.0169V12.7385H12.7131V15.6079H15.0432V22.4945H17.9557Z"
                fill="white"
              />
            </svg>
          </a>
          <a href="#" className="modal__link">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="30" height="30" rx="2" fill="#7481FF" />
              <path
                d="M23.3845 11.2773C23.19 10.5543 22.62 9.98444 21.8972 9.78978C20.5767 9.42847 15.2945 9.42847 15.2945 9.42847C15.2945 9.42847 10.0125 9.42847 8.69196 9.77608C7.98304 9.97054 7.39915 10.5544 7.20469 11.2773C6.85718 12.5977 6.85718 15.336 6.85718 15.336C6.85718 15.336 6.85718 18.0882 7.20469 19.3948C7.39935 20.1177 7.96913 20.6876 8.69207 20.8822C10.0264 21.2436 15.2947 21.2436 15.2947 21.2436C15.2947 21.2436 20.5767 21.2436 21.8972 20.896C22.6201 20.7015 23.19 20.1316 23.3847 19.4087C23.7321 18.0882 23.7321 15.35 23.7321 15.35C23.7321 15.35 23.746 12.5977 23.3845 11.2773ZM13.6127 17.8659V12.8062L18.0051 15.336L13.6127 17.8659Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </div>
    );
  }

  function contactUs() {
    return (
      <div className="contactUs">
        <div className="contactUs__close" onClick={closeContactUs}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L23 23" stroke="#41456B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M23 1L0.999999 23"
              stroke="#41456B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="contactUs__title">We can't wait to hear from you!</div>
        <form className="contactUs__form">
          <input type="text" name="name" placeholder="Your Name" className="contactUs__input" />
          <input type="tel" name="phone" placeholder="Phone Number" className="contactUs__input" />
          <input type="email" name="email" placeholder="Email Address" className="contactUs__input" />
          <div className="contactUs__btn">
            <BtnSolid onClick={submitForm}>Contact Me</BtnSolid>
          </div>
        </form>

        <div className="contactUs__social">
          <div className="contactUs__social-title">You can contact us yourself</div>
          <div className="contactUs__social-list">
            <a href="#" className="contactUs__link">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="30" height="30" rx="2" fill="#7481FF" />
                <path
                  d="M14.8573 10.6955C12.5992 10.6955 10.7283 12.5342 10.7283 14.8246C10.7283 17.1149 12.567 18.9536 14.8573 18.9536C17.1476 18.9536 18.9863 17.0826 18.9863 14.8246C18.9863 12.5665 17.1154 10.6955 14.8573 10.6955ZM14.8573 17.4697C13.4057 17.4697 12.2121 16.2762 12.2121 14.8246C12.2121 13.3729 13.4057 12.1794 14.8573 12.1794C16.3089 12.1794 17.5025 13.3729 17.5025 14.8246C17.5025 16.2762 16.3089 17.4697 14.8573 17.4697Z"
                  fill="white"
                />
                <path
                  d="M19.1501 11.5343C19.6667 11.5343 20.0856 11.1154 20.0856 10.5988C20.0856 10.0821 19.6667 9.6633 19.1501 9.6633C18.6334 9.6633 18.2146 10.0821 18.2146 10.5988C18.2146 11.1154 18.6334 11.5343 19.1501 11.5343Z"
                  fill="white"
                />
                <path
                  d="M21.5669 8.17973C20.7281 7.30876 19.5346 6.85715 18.1798 6.85715H11.5346C8.72815 6.85715 6.85718 8.72811 6.85718 11.5346V18.1475C6.85718 19.5346 7.30879 20.7281 8.21202 21.5991C9.08298 22.4378 10.2443 22.8571 11.5669 22.8571H18.1475C19.5346 22.8571 20.6959 22.4055 21.5346 21.5991C22.4056 20.7604 22.8572 19.5668 22.8572 18.1797V11.5346C22.8572 10.1797 22.4056 9.01844 21.5669 8.17973ZM21.4378 18.1797C21.4378 19.1797 21.083 19.9862 20.5023 20.5346C19.9217 21.083 19.1152 21.3733 18.1475 21.3733H11.5669C10.5991 21.3733 9.79266 21.083 9.21202 20.5346C8.63137 19.9539 8.34105 19.1475 8.34105 18.1475V11.5346C8.34105 10.5668 8.63137 9.76037 9.21202 9.17973C9.7604 8.63134 10.5991 8.34102 11.5669 8.34102H18.212C19.1798 8.34102 19.9862 8.63134 20.5669 9.21199C21.1152 9.79263 21.4378 10.5991 21.4378 11.5346V18.1797Z"
                  fill="white"
                />
              </svg>
            </a>
            <a href="#" className="contactUs__link">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="30" height="30" rx="2" fill="#7481FF" />
                <path
                  d="M17.9557 22.4946V15.608H20.2857L20.8683 12.7386H17.9557V11.5909C17.9557 10.4431 18.5394 9.86924 19.7032 9.86924H20.8683V6.99985C20.2857 6.99985 19.5634 6.99985 18.5382 6.99985C16.3975 6.99985 15.0432 8.65319 15.0432 11.017V12.7386H12.7131V15.608H15.0432V22.4946H17.9557Z"
                  fill="white"
                />
              </svg>
            </a>
            <a href="#" className="contactUs__link">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="30" height="30" rx="2" fill="#7481FF" />
                <path
                  d="M23.3845 11.2773C23.19 10.5544 22.62 9.98453 21.8972 9.78987C20.5767 9.42856 15.2945 9.42856 15.2945 9.42856C15.2945 9.42856 10.0125 9.42856 8.69196 9.77617C7.98304 9.97063 7.39915 10.5545 7.20469 11.2773C6.85718 12.5978 6.85718 15.3361 6.85718 15.3361C6.85718 15.3361 6.85718 18.0883 7.20469 19.3949C7.39935 20.1178 7.96913 20.6876 8.69207 20.8823C10.0264 21.2437 15.2947 21.2437 15.2947 21.2437C15.2947 21.2437 20.5767 21.2437 21.8972 20.8961C22.6201 20.7015 23.19 20.1317 23.3847 19.4088C23.7321 18.0883 23.7321 15.35 23.7321 15.35C23.7321 15.35 23.746 12.5978 23.3845 11.2773ZM13.6127 17.8659V12.8063L18.0051 15.3361L13.6127 17.8659Z"
                  fill="white"
                />
              </svg>
            </a>
            <a href="#" className="contactUs__link">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="30" height="30" rx="2" fill="#7481FF" />
                <path
                  d="M8 12.7143L14.4778 16.6803C14.7983 16.8765 15.2017 16.8765 15.5222 16.6803L22 12.7143M8 12.7143V21C8 21.5523 8.44772 22 9 22H21C21.5523 22 22 21.5523 22 21V12.7143M8 12.7143L14.4414 8.3762C14.7791 8.14878 15.2209 8.14878 15.5586 8.3762L22 12.7143"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    );
  }

  function success() {
    return (
      <div className="success">
        <div className="success__close" onClick={closeContactUs}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L23 23" stroke="#41456B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M23 1L0.999999 23"
              stroke="#41456B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="success__icon">
          <svg width="100%" height="100%" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="35" cy="35" r="33.5" stroke="#7481FF" stroke-width="3" />
            <path
              d="M21 37.2925L32.3077 47.6L50.4 21"
              stroke="#7481FF"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="success__title">Application Successful!</div>
        <div className="success__subtitle">Our manager will contact you in the nearest time.</div>
      </div>
    );
  }
};

export default Modal;
