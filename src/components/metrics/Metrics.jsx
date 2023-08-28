import React from 'react';

import './index.scss';

const Metrics = ({ text, descr }) => {
  return (
    <div className="metrics">
      <div className="metrics__number">{text}</div>
      <div className="metrics__text">{descr}</div>
    </div>
  );
};

export default Metrics;
