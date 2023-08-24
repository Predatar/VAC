import React from 'react';

import styles from './index.module.scss';

const SecondSection = () => {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className={styles.title}>Interest rates and loan terms</div>
        <div className={styles.wrapper}>
          <div className={styles.card}>
            <div className={styles.heading}>
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1063_3814)">
                  <rect width="60" height="60" fill="white" />
                  <circle cx="30" cy="30" r="29" stroke="#41456B" stroke-width="2" />
                  <path
                    d="M27.9475 22.3685C27.9475 25.159 25.6854 27.4211 22.8949 27.4211C20.1044 27.4211 17.8423 25.159 17.8423 22.3685C17.8423 19.578 20.1044 17.3159 22.8949 17.3159C25.6854 17.3159 27.9475 19.578 27.9475 22.3685Z"
                    stroke="#41456B"
                    stroke-width="2"
                  />
                  <path
                    d="M42.157 37.6315C42.157 40.422 39.8949 42.6842 37.1044 42.6842C34.3139 42.6842 32.0518 40.422 32.0518 37.6315C32.0518 34.8411 34.3139 32.5789 37.1044 32.5789C39.8949 32.5789 42.157 34.8411 42.157 37.6315Z"
                    stroke="#41456B"
                    stroke-width="2"
                  />
                  <path
                    d="M37.3671 17.8948L21.8408 42.1053"
                    stroke="#41456B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1063_3814">
                    <rect width="60" height="60" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <div className={styles.cardTitle}>What are my interest rate options?</div>
            </div>
            <div className={styles.descr}>
              We work to secure customized auto loans from Canada’s largest lenders. Your interest rate is critical for
              determining the total cost of your auto financing. Interest rates are based on many factors including the
              loan amount, your credit score, and your budget. We help you find the lowest interest rates available for
              your auto loan.
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.heading}>
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1063_3842)">
                  <rect width="60" height="60" fill="white" />
                  <circle cx="30" cy="30" r="29" stroke="#41456B" stroke-width="2" />
                  <path
                    d="M29.9992 9.67737V30L19.354 42.0967"
                    stroke="#41456B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1063_3842">
                    <rect width="60" height="60" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <div className={styles.cardTitle}>
                How long will my loan <br /> term be?
              </div>
            </div>
            <div className={styles.descr}>
              Our goal is to find the right car and the right loan for you. Because we have relationships with so many
              different lenders, we can help you find the right term length for your budget. The longer the loan is,
              often the lower the monthly payments will be—but the more expensive the loan will be overall. Most of the
              loans we secure for our clients are between 36 and 72 months.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
