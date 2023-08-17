import React, { useState, useEffect } from 'react';

import styles from './index.module.scss';

import triangleUp from '../../img/triangleUp.svg';
import triangleDown from '../../img/triangleDown.svg';

const FouthSection = () => {
  const [screen, setScreen] = useState(0);

  useEffect(() => {
    setScreen(window.innerWidth);
  }, []);

  window.addEventListener('resize', () => {
    setScreen(window.innerWidth);
  });

  return (
    <div className={styles.section}>
      <div className="container">
        <div className={styles.title}>Advantages of working with us</div>
        <div className={styles.wrapper}>
          <div className={styles.item}>
            <div className={styles.imgUp}>
              <img src={triangleUp} alt="triangle" />
            </div>
            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M26.2387 13.2703C25.7093 12.964 25.0401 12.8957 24.4113 13.1814L8.17278 20.5585C7.45858 20.8829 7 21.5949 7 22.3794V54.8288C7 56.241 8.42398 57.2084 9.73684 56.6881L26.2624 50.139C26.339 50.1818 26.4189 50.2199 26.502 50.2528L42.7405 56.6881C43.346 56.928 43.9752 56.8516 44.4774 56.5609C44.9795 56.8516 45.6087 56.928 46.2142 56.6881L62.4527 50.2528C63.2152 49.9506 63.7159 49.2136 63.7159 48.3935V15.0023C63.7159 13.5479 62.2128 12.5799 60.8887 13.1814L44.6501 20.5585C44.5907 20.5854 44.5331 20.6151 44.4774 20.6473C44.4216 20.6151 44.364 20.5854 44.3046 20.5585L28.0661 13.1814C27.4372 12.8957 26.7681 12.964 26.2387 13.2703ZM27.2388 34.3438L27.5378 34.4639C28.0503 34.6699 28.6326 34.4214 28.8386 33.909C29.0445 33.3965 28.796 32.8141 28.2836 32.6082L27.2388 32.1883V15.0023L43.4774 22.3794V38.7143L41.9625 38.1055C41.45 37.8996 40.8677 38.148 40.6617 38.6605C40.4558 39.1729 40.7042 39.7553 41.2167 39.9613L43.4774 40.8698V54.8288L27.2388 48.3935V34.3438ZM45.4774 22.3794V38.3793L45.8447 38.2606C46.3703 38.0909 46.934 38.3793 47.1037 38.9048C47.2735 39.4303 46.9851 39.994 46.4595 40.1638L45.4774 40.4811V54.8288L61.7159 48.3935V15.0023L45.4774 22.3794ZM25.2385 31.6966V15.0023L9 22.3794L8.58639 21.4689L9 22.3794V54.8288L25.2385 48.3935V33.8051L24.54 34.0384C24.0161 34.2133 23.4497 33.9304 23.2747 33.4066C23.0998 32.8827 23.3827 32.3163 23.9065 32.1413L25.2385 31.6966ZM21.7247 34.9784C22.2486 34.8035 22.5314 34.2371 22.3565 33.7132C22.1816 33.1894 21.6151 32.9065 21.0913 33.0814L19.6836 33.5514C19.6078 33.5767 19.5371 33.6102 19.4721 33.6506C18.854 32.6595 17.754 32 16.5 32C14.567 32 13 33.567 13 35.5C13 37.433 14.567 39 16.5 39C18.4329 39 19.9999 37.4331 20 35.5002C20.1051 35.5003 20.2119 35.4836 20.3171 35.4485L21.7247 34.9784ZM32.8432 34.4406C32.3308 34.2347 31.7484 34.4832 31.5425 34.9956C31.3365 35.5081 31.585 36.0904 32.0974 36.2964L36.6571 38.1288C37.1695 38.3348 37.7519 38.0863 37.9578 37.5738C38.1638 37.0614 37.9153 36.479 37.4029 36.2731L32.8432 34.4406ZM53.3078 37.9515C53.8333 37.7818 54.1217 37.2181 53.9519 36.6926C53.7822 36.167 53.2185 35.8786 52.693 36.0484L50.4102 36.7858C49.8847 36.9556 49.5963 37.5192 49.766 38.0448C49.9358 38.5703 50.4995 38.8587 51.025 38.689L53.3078 37.9515ZM16.5 37C17.3284 37 18 36.3284 18 35.5C18 34.6716 17.3284 34 16.5 34C15.6716 34 15 34.6716 15 35.5C15 36.3284 15.6716 37 16.5 37ZM57 29.5C57 29.4915 57 29.4916 56.9983 29.5009C56.9925 29.5323 56.9677 29.6683 56.8599 29.9325C56.7323 30.2454 56.5367 30.6223 56.2852 31.0419C56.0438 31.4447 55.7719 31.8525 55.5 32.237C55.2281 31.8525 54.9562 31.4447 54.7148 31.0419C54.4633 30.6223 54.2677 30.2454 54.1401 29.9325C54.0323 29.6683 54.0075 29.5323 54.0017 29.5009C54 29.4916 54 29.4915 54 29.5C54 28.6716 54.6716 28 55.5 28C56.3284 28 57 28.6716 57 29.5ZM59 29.5C59 30.8637 57.2581 33.2895 56.232 34.6001C55.8549 35.0817 55.1451 35.0817 54.768 34.6001C53.7419 33.2895 52 30.8637 52 29.5C52 27.567 53.567 26 55.5 26C57.433 26 59 27.567 59 29.5Z"
                fill="#41456B"
              />
            </svg>
            <div className={styles.deliveryTitle}>Vehicle Delivery</div>
            <div className={styles.deliverySubtitle}>
              We deliver your vehicle directly to your door. You don’t sign anything until you test drive the vehicle.
              There is never any obligation to buy beforehand.
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.imgUp}>
              <img src={screen < 1187 ? triangleUp : triangleDown} alt="triangle" />
            </div>
            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14 13C14 10.7909 15.7909 9 18 9H51C53.2091 9 55 10.7909 55 13V49C55 49.5523 54.5523 50 54 50C53.4477 50 53 49.5523 53 49V13C53 11.8954 52.1046 11 51 11H18C16.8954 11 16 11.8954 16 13V57C16 58.1046 16.8954 59 18 59H38.8875C39.4398 59 39.8875 59.4477 39.8875 60C39.8875 60.5523 39.4398 61 38.8875 61H18C15.7909 61 14 59.2091 14 57V13ZM55.2071 52.2929C55.5976 52.6834 55.5976 53.3166 55.2071 53.7071L47.7071 61.2071C47.3166 61.5976 46.6834 61.5976 46.2929 61.2071L42.2929 57.2071C41.9024 56.8166 41.9024 56.1834 42.2929 55.7929C42.6834 55.4024 43.3166 55.4024 43.7071 55.7929L47 59.0858L53.7929 52.2929C54.1834 51.9024 54.8166 51.9024 55.2071 52.2929ZM21 16C20.4477 16 20 16.4477 20 17C20 17.5523 20.4477 18 21 18H35C35.5523 18 36 17.5523 36 17C36 16.4477 35.5523 16 35 16H21ZM20 27C20 26.4477 20.4477 26 21 26H45C45.5523 26 46 26.4477 46 27C46 27.5523 45.5523 28 45 28H21C20.4477 28 20 27.5523 20 27ZM21 32C20.4477 32 20 32.4477 20 33C20 33.5523 20.4477 34 21 34H41C41.5523 34 42 33.5523 42 33C42 32.4477 41.5523 32 41 32H21ZM20 45C20 44.4477 20.4477 44 21 44H27C27.5523 44 28 44.4477 28 45C28 45.5523 27.5523 46 27 46H21C20.4477 46 20 45.5523 20 45ZM31 44C30.4477 44 30 44.4477 30 45C30 45.5523 30.4477 46 31 46H41C41.5523 46 42 45.5523 42 45C42 44.4477 41.5523 44 41 44H31Z"
                fill="#41456B"
              />
            </svg>

            <div className={styles.deliveryTitle}>Auto Financing</div>
            <div className={styles.deliverySubtitle}>
              We partner with the largest lenders in Canada to offer the strongest financing options in the
              industry—including rates as low as 4%
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.imgUp}>
              <img src={triangleUp} alt="triangle" />
            </div>
            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.17393 44H7C5.34315 44 4 42.6569 4 41V36.5H6C6.55228 36.5 7 36.0523 7 35.5C7 34.9477 6.55228 34.5 6 34.5H4V34.0139C4 33.4216 4.17531 32.8426 4.50385 32.3498L11.1798 22.3359C11.7362 21.5013 12.6729 21 13.6759 21H30V29H26C25.4477 29 25 29.4477 25 30C25 30.5523 25.4477 31 26 31L52 31C52.1403 31 52.2739 30.9711 52.3951 30.9189C52.9229 31.1221 53.4769 31.262 54.0458 31.3328L63.3704 32.493C64.5367 32.6381 65.4772 33.4401 65.8394 34.5H63.5C62.9477 34.5 62.5 34.9477 62.5 35.5C62.5 36.0523 62.9477 36.5 63.5 36.5H66V41C66 42.6569 64.6569 44 63 44H61.8261C61.1489 41.1333 58.5736 39 55.5 39C52.4264 39 49.8511 41.1333 49.1739 44H20.8261C20.1489 41.1333 17.5736 39 14.5 39C11.4264 39 8.8511 41.1333 8.17393 44ZM32 29L49.6402 29L43.0228 21.9473C42.4557 21.3429 41.6639 21 40.8351 21H32V29ZM63 46H61.9811C61.7257 49.3562 58.9216 52 55.5 52C52.0784 52 49.2743 49.3562 49.0189 46H20.9811C20.7257 49.3562 17.9216 52 14.5 52C11.0784 52 8.27426 49.3562 8.01894 46H7C4.23858 46 2 43.7614 2 41V34.0139C2 33.0268 2.29219 32.0617 2.83975 31.2404L9.51567 21.2265C10.443 19.8355 12.0042 19 13.6759 19H40.8351C42.2164 19 43.5362 19.5715 44.4813 20.5788L51.2639 27.8075C52.0627 28.6589 53.1342 29.2039 54.2928 29.3481L63.6174 30.5083C66.1208 30.8197 68 32.9473 68 35.47V41C68 43.7614 65.7614 46 63 46ZM14.5 50C16.9853 50 19 47.9853 19 45.5C19 43.0147 16.9853 41 14.5 41C12.0147 41 10 43.0147 10 45.5C10 47.9853 12.0147 50 14.5 50ZM55.5 50C57.9853 50 60 47.9853 60 45.5C60 43.0147 57.9853 41 55.5 41C53.0147 41 51 43.0147 51 45.5C51 47.9853 53.0147 50 55.5 50ZM33 34.5C32.4477 34.5 32 34.9477 32 35.5C32 36.0523 32.4477 36.5 33 36.5H36C36.5523 36.5 37 36.0523 37 35.5C37 34.9477 36.5523 34.5 36 34.5H33Z"
                fill="#41456B"
              />
            </svg>

            <div className={styles.deliveryTitle}>Huge Inventory</div>
            <div className={styles.deliverySubtitle}>
              We have access to thousands of high-quality vehicles and offer them to you at wholesale prices. Your dream
              car is waiting for you
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FouthSection;
