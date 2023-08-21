import React, { useState } from 'react';

import LinkSolid from '../links/linkSolid/LinkSolid';

import './index.scss';

const Calculator = ({ mtX, mtM, mtS }) => {
  const [multiplier, setMultiplier] = useState(1);
  const [amount, setAmount] = useState(10000);
  const [duration, setDuration] = useState(1);

  const changeTab = ({ target }) => {
    const node = target.parentNode;
    node.childNodes.forEach(elem => {
      elem.classList.contains('calculator__tab_active') ? elem.classList.remove('calculator__tab_active') : null;
    });
    target.classList.add('calculator__tab_active');
    setMultiplier(+target.getAttribute('datatype'));
  };

  const changeRange = e => {
    const tempSliderValue = e.target.value;
    const progress = (tempSliderValue / e.target.max) * 100;
    e.target.style.background = `linear-gradient(to right, #7481FF ${progress}%, #ccc ${progress}%)`;
  };

  return (
    <div
      className="calculator"
      style={{
        '--mtX': `${mtX}px`,
        '--mtM': `${mtM ? mtM : mtX}px`,
        '--mtS': `${mtS ? mtS : mtM ? mtM : mtX}px`
      }}
    >
      <div className="container">
        <div className="calculator__header">
          <div className="calculator__title">Let’s figure out how much you can afford</div>
          <div className="calculator__subtitle">
            Before you start shopping, let’s figure out how much you can afford. Move the sliders to see how the loan
            duration and the total loan amount affect your monthly payments.
          </div>
        </div>
        <div className="calculator__wrapper">
          <div className="calculator__select">
            <div className="calculator__tabs" onClick={changeTab}>
              <div className="calculator__tab calculator__tab_active" datatype="1">
                Poor
              </div>
              <div className="calculator__tab" datatype="2">
                Average
              </div>
              <div className="calculator__tab" datatype="3">
                Good
              </div>
            </div>
            <div className="calculator__range">
              <div className="calculator__range-wrapper">
                <div className="calculator__range-title">Loan Amount</div>
                <div className="calculator__range-count">$ {amount * multiplier}</div>
              </div>
              <input
                type="range"
                name="amount"
                id="amount"
                className="calculator__input"
                min={10000}
                max={1000000}
                step={1000}
                value={amount}
                onChange={e => {
                  setAmount(e.target.value);
                  changeRange(e);
                }}
              />
            </div>
            <div className="calculator__range">
              <div className="calculator__range-wrapper">
                <div className="calculator__range-title">Loan Duration</div>
                <div className="calculator__range-count">
                  {duration} <span>month</span>
                </div>
              </div>
              <input
                type="range"
                name="duration"
                id="duration"
                className="calculator__input"
                min={1}
                max={36}
                value={duration}
                step={1}
                onChange={e => {
                  setDuration(e.target.value);
                  changeRange(e);
                }}
              />
            </div>
          </div>
          <div className="calculator__price">
            <div className="calculator__biweek">
              <div className="calculator__price-title">Bi-Weekly Payment</div>
              <div className="calculator__price-count calculator__price-count_big">
                $ {Math.floor((amount * multiplier) / duration / 2)}
              </div>
            </div>
            <div className="calculator__month">
              <div className="calculator__price-title">Monthly Payment</div>
              <div className="calculator__price-count">$ {Math.floor((amount * multiplier) / duration)}</div>
            </div>
            <div className="calculator__week">
              <div className="calculator__price-title">Weekly Payment</div>
              <div className="calculator__price-count">$ {Math.floor((amount * multiplier) / duration / 4)}</div>
            </div>
            <LinkSolid to={'/'} wx={250} ws={'auto'}>
              request a car
            </LinkSolid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
