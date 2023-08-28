import React from 'react';

import { Link } from 'react-router-dom';

import styles from './index.module.scss';

const SecondSection = () => {
  return (
    <div className={styles.section}>
      <div className="container">
        <Link to="/blog" className={styles.back}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.9995 20L5.99951 12L13.9995 4"
              stroke="#606276"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Back
        </Link>
        <div className={styles.wrapper}>
          <Link to="/blog" className={styles.backTablet}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14 20L6 12L14 4"
                stroke="#606276"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
          <div className={styles.date}>
            <Link to="/blog" className={styles.backMobile}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.9995 20L5.99951 12L13.9995 4"
                  stroke="#606276"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Back
            </Link>
            10 May, 2020
          </div>
          <div className={styles.title}>
            How to save on buying a car? <br />
            Why is it better to buy from us
          </div>
          <div className={styles.text}>
            Id dolore mollit excepteur magna consectetur et dolore mollit qui quis do ea consequat tempor. Sunt eu
            excepteur cupidatat aliqua anim. Aliqua consectetur commodo magna ea proident aliquip. Minim ipsum irure ad
            irure sint cupidatat labore. <br />
            Et duis cupidatat occaecat anim fugiat qui nulla consequat ex. Incididunt in consequat dolore elit ut
            eiusmod ipsum eiusmod labore in consectetur nisi voluptate pariatur. Excepteur anim dolore ex irure
            voluptate minim in deserunt ad dolore reprehenderit. Pariatur laborum tempor irure nisi voluptate aliqua in
            aliquip anim commodo esse deserunt est commodo. Lorem nostrud incididunt commodo enim qui incididunt ipsum.
            <br />
            Nostrud veniam do nostrud commodo velit incididunt culpa. Adipisicing commodo amet ea qui id aliqua.
            Cupidatat veniam enim sunt elit elit aute adipisicing voluptate consequat esse et consectetur magna
            incididunt. Sunt sint reprehenderit esse reprehenderit dolor id anim cupidatat non. <br /> Anim nulla
            cupidatat irure do aliqua laboris exercitation qui exercitation et aliquip pariatur. Et ullamco cupidatat
            fugiat ex ullamco aliquip minim nisi amet adipisicing velit. Ex commodo ex anim amet commodo. Tempor eu non
            culpa ea id ad eu aliquip dolor in aliqua nulla. Enim pariatur adipisicing reprehenderit eiusmod deserunt
            laborum veniam incididunt sit ullamco cillum aute sint. Qui ex Lorem deserunt velit elit. Occaecat pariatur
            fugiat eu cillum sit nulla excepteur incididunt. Incididunt excepteur aliquip voluptate ut deserunt est enim
            reprehenderit ullamco ut ullamco mollit incididunt aute. Adipisicing sunt sunt mollit proident consequat
            aliquip id adipisicing labore sit non. Occaecat incididunt id est eu reprehenderit voluptate quis amet
            veniam. Ea nulla ipsum mollit reprehenderit ullamco eiusmod nostrud velit Lorem dolor fugiat. Occaecat
            incididunt nostrud occaecat cillum esse ex id exercitation tempor nisi elit enim. Labore Lorem amet in
            reprehenderit officia sint minim ipsum non. <br /> Elit incididunt non nisi occaecat reprehenderit aute
            ipsum deserunt culpa aliquip officia minim. Adipisicing amet dolore veniam eiusmod tempor sit sint quis in
            sunt laboris dolore nulla. Id ut culpa pariatur in. Incididunt tempor ut dolore aute cupidatat qui enim est
            veniam. Irure deserunt adipisicing cillum nostrud occaecat cillum aute est sit. Id adipisicing aute esse sit
            aute. Cillum anim et Lorem quis ad quis duis ut ex eu deserunt. Irure ullamco adipisicing duis sint
            incididunt voluptate ipsum enim consectetur officia culpa elit adipisicing voluptate. Tempor anim deserunt
            ut duis qui eiusmod. <br /> Sunt reprehenderit fugiat magna sit reprehenderit pariatur reprehenderit non
            irure aliqua sit irure cupidatat. Sit occaecat aliqua elit qui ut commodo adipisicing fugiat aliqua dolore.
            Enim proident ipsum veniam enim elit officia officia tempor sint esse aliquip aliqua occaecat. Duis nostrud
            ex consectetur ad. Enim pariatur ex magna incididunt enim aute dolore id tempor anim irure enim cupidatat.
            Enim dolore dolore aute duis occaecat sint. Voluptate voluptate eiusmod elit irure nisi incididunt laborum
            fugiat proident quis aliquip excepteur ad ut. Veniam veniam irure Lorem dolore sint amet dolore. Commodo
            esse occaecat consectetur do id velit tempor deserunt consectetur id ea. Do sunt tempor laboris sit ad.
            Fugiat eu est sit voluptate incididunt laborum et aliquip in ex cupidatat minim adipisicing. Occaecat dolor
            veniam duis anim eu deserunt cupidatat incididunt elit commodo esse culpa culpa aliquip.
            <br />
            <br />
            <br />
            Voluptate nulla amet ad commodo veniam consequat laborum tempor proident cupidatat aute nisi eiusmod
            laborum. Esse amet duis aliqua culpa consequat et. Laborum tempor commodo et exercitation consectetur aute
            laborum aliquip tempor nostrud nulla nisi labore. Tempor tempor laboris officia consectetur sint esse sit ad
            nostrud et deserunt laborum sint eu. Cillum laboris et sint reprehenderit deserunt. Laborum labore
            incididunt duis mollit est anim reprehenderit consectetur enim fugiat veniam deserunt eiusmod. Irure sunt
            aute cupidatat qui qui consequat amet tempor. In officia est velit veniam magna proident adipisicing eu non
            labore mollit ad anim ut. Sit cillum in ea qui minim commodo labore nisi irure duis. Ea do laborum id
            adipisicing et cillum occaecat est laborum eu consequat ad commodo.{' '}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
