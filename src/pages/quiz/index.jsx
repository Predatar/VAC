import React, { useState, useEffect, useRef } from 'react';

import { Helmet } from 'react-helmet';

import BtnSolid from '../../UI/button/buttonSolid/BtnSolid';
import LinkSolid from '../../UI/links/linkSolid/LinkSolid';

import styles from './index.module.scss';

const Quiz = ({ setFooter }) => {
  const progressBar = useRef();

  useEffect(() => {
    setFooter(true);

    showProgress(true);
    changeRange(1);
  }, []);

  useEffect(() => {
    return () => {
      setFooter(false);

      showProgress(true);
    };
  }, []);

  const Btn = ({ title, onClick }) => {
    return (
      <div className={styles.btn} onClick={onClick}>
        {title}
      </div>
    );
  };

  const changeBtn = e => {
    if (e.target.classList.contains(styles.btn)) {
      const node = e.target.parentNode;
      node.childNodes.forEach(elem => {
        elem.classList.contains(styles.btn_active) ? elem.classList.remove(styles.btn_active) : null;
      });
      e.target.classList.add(styles.btn_active);
    }
  };

  function changeRange(value) {
    const progress = (value / 11) * 100;
    console.log(progressBar, progress);
    progressBar.current.style.background = `linear-gradient(to right, #7380FF ${progress}%, #F1F1F1 ${progress}%)`;
  }

  const whatYourBudget = (
    <>
      <div className={styles.title}>What's your budget?</div>
      <div className={styles.subtitle}>Find vehicle options that fit your budget.</div>
      <div className={styles.group} onClick={changeBtn}>
        <Btn title={'Under $250/Month'} />
        <Btn title={'$250-374/Month'} />
        <Btn title={'$374-500/Month'} />
        <Btn title={'Over $500/Month'} />
      </div>
      <div className={styles.btnWrapper}>
        <BtnSolid
          wx={222}
          ws={'auto'}
          onClick={() => {
            setContent(whatYourEmploymentStatus);
            changeRange(2);
          }}
        >
          Сontinue
        </BtnSolid>
      </div>
    </>
  );
  const whatYourEmploymentStatus = (
    <>
      <div className={styles.title}>What's your employment status?</div>
      <div className={styles.subtitle}>
        Your employment status will help determine the best vehicle and financing options for you.
      </div>
      <div className={styles.group} onClick={changeBtn}>
        <Btn
          title={'Employed'}
          onClick={() => {
            setContent(selfEnterYourMonthlyIncome);
            changeRange(4);
          }}
        />
        <Btn
          title={'Self-Employed'}
          onClick={() => {
            setContent(selfEnterYourMonthlyIncome);
            changeRange(4);
          }}
        />
        <Btn
          title={'Student'}
          onClick={() => {
            setContent(enterYourMonthlyIncome);
            changeRange(4);
          }}
        />
        <Btn
          title={'Retired / Pension'}
          onClick={() => {
            setContent(retiredEnterYourMonthlyIncome);
            changeRange(4);
          }}
        />
        <Btn
          title={'Other'}
          onClick={() => {
            setContent(howDoYouEarnIncome);
            changeRange(3);
          }}
        />
      </div>
      <div className={styles.btnWrapper}>
        <BtnSolid wx={222} ws={'auto'}>
          Сontinue
        </BtnSolid>
        <div
          className={styles.back}
          onClick={() => {
            setContent(whatYourBudget);
            changeRange(1);
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14 20L6 12L14 4"
              stroke="#606276"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Back
        </div>
      </div>
    </>
  );
  const enterYourMonthlyIncome = (
    <>
      <div className={styles.title}>Enter your monthly income</div>
      <div className={styles.subtitle}>
        Your income details help us make sure your vehicle payments are easy and affordable. Before taxes and
        deductions.
      </div>
      <div className={styles.inputWrapper}>
        <input type="text" name="income" id="income" className={styles.input} placeholder="Monthly income" />
      </div>
      <div className={styles.btnWrapper}>
        <BtnSolid
          wx={222}
          ws={'auto'}
          onClick={() => {
            setContent(howLongHaveYouBeenEarningThisIncome);
            changeRange(7);
          }}
        >
          Сontinue
        </BtnSolid>
        <div
          className={styles.back}
          onClick={() => {
            setContent(whatYourEmploymentStatus);
            changeRange(2);
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14 20L6 12L14 4"
              stroke="#606276"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Back
        </div>
      </div>
    </>
  );
  const selfEnterYourMonthlyIncome = (
    <>
      <div className={styles.title}>Enter your monthly income</div>
      <div className={styles.subtitle}>
        Your income details help us make sure your vehicle payments are easy and affordable. Before taxes and
        deductions.
      </div>
      <div className={styles.inputWrapper}>
        <input type="text" name="income" id="income" className={styles.input} placeholder="Monthly income" />
      </div>
      <div className={styles.btnWrapper}>
        <BtnSolid
          wx={222}
          ws={'auto'}
          onClick={() => {
            setContent(tellUsAboutYourEmployment);
            changeRange(6);
          }}
        >
          Сontinue
        </BtnSolid>
        <div
          className={styles.back}
          onClick={() => {
            setContent(whatYourEmploymentStatus);
            changeRange(2);
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14 20L6 12L14 4"
              stroke="#606276"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Back
        </div>
      </div>
    </>
  );
  const otherEnterYourMonthlyIncome = (
    <>
      <div className={styles.title}>Enter your monthly income</div>
      <div className={styles.subtitle}>
        Your income details help us make sure your vehicle payments are easy and affordable. Before taxes and
        deductions.
      </div>
      <div className={styles.inputWrapper}>
        <input type="text" name="income" id="income" className={styles.input} placeholder="Monthly income" />
      </div>
      <div className={styles.btnWrapper}>
        <BtnSolid
          wx={222}
          ws={'auto'}
          onClick={() => {
            setContent(howLongReceiving);
            changeRange(8);
          }}
        >
          Сontinue
        </BtnSolid>
        <div
          className={styles.back}
          onClick={() => {
            setContent(howDoYouEarnIncome);
            changeRange(3);
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14 20L6 12L14 4"
              stroke="#606276"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Back
        </div>
      </div>
    </>
  );
  const retiredEnterYourMonthlyIncome = (
    <>
      <div className={styles.title}>Enter your monthly income</div>
      <div className={styles.subtitle}>
        Your income details help us make sure your vehicle payments are easy and affordable. Before taxes and
        deductions.
      </div>
      <div className={styles.inputWrapper}>
        <input type="text" name="income" id="income" className={styles.input} placeholder="Monthly income" />
      </div>
      <div className={styles.btnWrapper}>
        <BtnSolid
          wx={222}
          ws={'auto'}
          onClick={() => {
            setContent(areYouCurrentlyWorking);
            changeRange(5);
          }}
        >
          Сontinue
        </BtnSolid>
        <div
          className={styles.back}
          onClick={() => {
            setContent(whatYourEmploymentStatus);
            changeRange(2);
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14 20L6 12L14 4"
              stroke="#606276"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Back
        </div>
      </div>
    </>
  );
  const tellUsAboutYourEmployment = (
    <>
      <div className={styles.title}>Tell us about your employment</div>
      <div className={styles.subtitle}>
        We won’t come visit but we need these details to confirm your employment status so you can get the best rates
        possible.
      </div>
      <div className={styles.inputWrapper}>
        <input type="text" name="employer" id="employer" className={styles.input} placeholder="Employer" />
        <input type="text" name="title" id="title" className={styles.input} placeholder="Title" />
      </div>
      <div className={styles.btnWrapper}>
        <BtnSolid
          wx={222}
          ws={'auto'}
          onClick={() => {
            setContent(howLongHaveYouBeenEarningThisIncome);
            changeRange(7);
          }}
        >
          Сontinue
        </BtnSolid>
        <div
          className={styles.back}
          onClick={() => {
            setContent(selfEnterYourMonthlyIncome);
            changeRange(4);
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14 20L6 12L14 4"
              stroke="#606276"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Back
        </div>
      </div>
    </>
  );
  const howLongHaveYouBeenEarningThisIncome = (
    <>
      <div className={styles.title}>How long have you been earning this income?</div>
      <div className={styles.subtitle}>
        Your income details help us make sure your vehicle payments are easy and affordable.
      </div>
      <div className={styles.inputDateWrapper}>
        <input type="text" name="employer" id="employer" className={styles.inputDate} placeholder="Years" />
        <input type="text" name="title" id="title" className={styles.inputDate} placeholder="Mounths" />
      </div>
      <div className={styles.btnWrapper}>
        <BtnSolid
          wx={222}
          ws={'auto'}
          onClick={() => {
            setContent(howLongReceiving);
            changeRange(8);
          }}
        >
          Сontinue
        </BtnSolid>
        <div
          className={styles.back}
          onClick={() => {
            setContent(whatYourEmploymentStatus);
            changeRange(2);
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14 20L6 12L14 4"
              stroke="#606276"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Back
        </div>
      </div>
    </>
  );
  const areYouCurrentlyWorking = (
    <>
      <div className={styles.title}>Are you currently working?</div>
      <div className={styles.subtitle}>
        Your employment status will help determing the best vehicle and financing options for you.
      </div>
      <div className={styles.group} onClick={changeBtn}>
        <Btn title={'Yes'} />
        <Btn title={'No'} />
      </div>
      <div className={styles.btnWrapper}>
        <BtnSolid wx={222} ws={'auto'} onClick={() => setContent(howLongReceiving)}>
          Сontinue
        </BtnSolid>
        <div className={styles.back} onClick={() => setContent(enterYourMonthlyIncome)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14 20L6 12L14 4"
              stroke="#606276"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Back
        </div>
      </div>
    </>
  );
  const howDoYouEarnIncome = (
    <>
      <div className={styles.title}>Enter your monthly income</div>
      <div className={styles.subtitle}>
        Your employment status will help determine the best vehicle and financing options for you.
      </div>
      <div className={styles.group} onClick={changeBtn}>
        <Btn title={'Long-term disable'} />
        <Btn title={'Spousal support / Alimony'} />
        <Btn title={'Child support'} />
        <Btn title={'Social assistance / Welfare'} />
        <Btn title={'Maternity leave'} />
        <Btn title={'Baby bonus / Child tax'} />
        <Btn title={'Unemployed / El'} />
        <Btn title={'Other / Not listed'} />
      </div>
      <div className={styles.btnWrapper}>
        <BtnSolid
          wx={222}
          ws={'auto'}
          onClick={() => {
            setContent(otherEnterYourMonthlyIncome);
            changeRange(4);
          }}
        >
          Сontinue
        </BtnSolid>
        <div
          className={styles.back}
          onClick={() => {
            setContent(whatYourEmploymentStatus);
            changeRange(2);
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14 20L6 12L14 4"
              stroke="#606276"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Back
        </div>
      </div>
    </>
  );
  const howLongReceiving = (
    <>
      <div className={styles.title}>How long receiving?</div>
      <div className={styles.subtitle}>
        Your income details help us make sure your vehicle payments are easy and affordable.
      </div>
      <div className={styles.inputWrapper}>
        <input type="text" name="time" id="time" className={styles.input} placeholder="Time" />
      </div>
      <div className={styles.btnWrapper}>
        <BtnSolid
          wx={222}
          ws={'auto'}
          onClick={() => {
            setContent(whereDoYouLive);
            changeRange(9);
          }}
        >
          Сontinue
        </BtnSolid>
        <div
          className={styles.back}
          onClick={() => {
            setContent(whatYourBudget);
            changeRange(2);
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14 20L6 12L14 4"
              stroke="#606276"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Back
        </div>
      </div>
    </>
  );
  const whereDoYouLive = (
    <>
      <div className={styles.title}>Where do you live?</div>
      <div className={styles.subtitle}>Providing your location helps find the best deals near you.</div>
      <div className={styles.inputWrapper}>
        <input type="text" name="address" id="address" className={styles.input} placeholder="Street address" />
        <input type="text" name="city" id="city" className={styles.input} placeholder="City" />
        <div className={styles.doubleInputWrapper}>
          <input type="text" name="province" id="province" placeholder="Province" className={styles.input} />
          <input type="text" name="code" id="code" placeholder="Postal code" className={styles.input} />
        </div>
      </div>
      <div className={styles.btnWrapper}>
        <BtnSolid
          wx={222}
          ws={'auto'}
          onClick={() => {
            setContent(whenWereYouBorn);
            changeRange(10);
          }}
        >
          Сontinue
        </BtnSolid>
        <div
          className={styles.back}
          onClick={() => {
            setContent(howLongReceiving);
            changeRange(8);
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14 20L6 12L14 4"
              stroke="#606276"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Back
        </div>
      </div>
    </>
  );
  const whenWereYouBorn = (
    <>
      <div className={styles.title}>When were you born?</div>
      <div className={styles.inputWrapper}>
        <div className={styles.doubleInputWrapper}>
          <input type="text" name="year" id="year" className={styles.input} placeholder="Year" />
          <div className={styles.doubleInputWrapper}>
            <input type="text" name="mounth" id="mounth" placeholder="Mounth" className={styles.input} />
            <input type="text" name="day" id="day" placeholder="Day" className={styles.input} />
          </div>
        </div>
      </div>
      <div className={styles.btnWrapper}>
        <BtnSolid
          wx={222}
          ws={'auto'}
          onClick={() => {
            setContent(lastStep);
            changeRange(11);
          }}
        >
          Сontinue
        </BtnSolid>
        <div
          className={styles.back}
          onClick={() => {
            setContent(whereDoYouLive);
            changeRange(9);
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14 20L6 12L14 4"
              stroke="#606276"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Back
        </div>
      </div>
    </>
  );
  const lastStep = (
    <>
      <div className={styles.title}>Congratulations! Last step.</div>
      <div className={styles.subtitle}>
        Get access to your vehicle and financing options by creating your account. There is no obligation to continue
        with financing if you change your mind.{' '}
      </div>
      <div className={styles.inputWrapper}>
        <div className={styles.doubleInputWrapper}>
          <input type="text" name="firstName" id="firstName" className={styles.input} placeholder="First name" />
          <input type="text" name="lastName" id="lastName" className={styles.input} placeholder="Last name" />
        </div>
        <input type="text" name="email" id="email" className={styles.input} placeholder="Email" />
        <input type="text" name="number" id="number" className={styles.input} placeholder="Phone number" />
      </div>
      <div className={styles.btnWrapper}>
        <BtnSolid
          wx={222}
          ws={'auto'}
          onClick={() => {
            setContent(success);
            showProgress(false);
          }}
        >
          Сontinue
        </BtnSolid>
        <div
          className={styles.back}
          onClick={() => {
            setContent(whenWereYouBorn);
            changeRange(10);
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14 20L6 12L14 4"
              stroke="#606276"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Back
        </div>
      </div>
    </>
  );
  const success = (
    <>
      <div className={styles.img}>
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
      <div className={styles.titleSuccess}>Application successful!</div>
      <div className={styles.subtitleSuccess}>
        Your response was successfully submitted. Thank you! Our team will reach out to you shortly.
      </div>
      <div className={styles.label}>Confirmation number:</div>
      <input type="text" name="id" id="id" className={styles.inputSuccess} value={'0002466-1vwrh0'} disabled />
      <div className={styles.btnWrapper}>
        <LinkSolid wx={222} ws={'auto'} to={'/'}>
          go to main page
        </LinkSolid>
      </div>
    </>
  );

  const [content, setContent] = useState(whatYourBudget);
  const [progress, showProgress] = useState(true);

  return (
    <div className={styles.section}>
      <Helmet>
        <title>Quiz - VAC</title>
      </Helmet>
      <div className="container">
        <div className={styles.wrapper}>
          <div
            className={styles.progress}
            ref={progressBar}
            style={{ display: `${progress ? 'block' : 'none'}` }}
          ></div>
          {content}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
