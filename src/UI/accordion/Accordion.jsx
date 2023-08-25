import React, { useEffect, useRef } from 'react';

import './index.scss';

function debounce(func, wait, immediate) {
  let timeout;

  return function executedFunction() {
    const context = this;
    const args = arguments;

    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
}

const Accordion = ({ title, children }) => {
  const node = useRef();
  let height;
  useEffect(() => {
    height = node.current.scrollHeight;
  }, []);
  window.addEventListener(
    'resize',
    debounce(() => {
      height = node.current.scrollHeight;
    })
  );
  const activeAccordion = () => {
    node.current.classList.toggle('accordion_active');
    if (node.current.classList.contains('accordion_active')) {
      node.current.style = `--heightAccordion: ${node.current.scrollHeight}px`;
    } else {
      node.current.style = `--heightAccordion: ${height}px`;
    }
  };

  return (
    <div className="accordion" ref={node} style={{ '--heightAccordion': `${height}px` }}>
      <div className="accordion__header" onClick={activeAccordion}>
        <div className="accordion__title">{title}</div>
        <div className="accordion__arrow">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 10L12 18L4 10"
              stroke="#41456B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="accordion__descr">{children}</div>
    </div>
  );
};

export default Accordion;
