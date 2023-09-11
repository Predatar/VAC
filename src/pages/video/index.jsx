import React, { useState, useEffect } from 'react';

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import { Helmet } from 'react-helmet';
import Heading from '../../components/heading/Heading';

import VideoCard from '../../components/videoCard/VideoCard';

import styles from './index.module.scss';

import videoImg1 from '../../img/video/Video1.jpg';
import videoImg2 from '../../img/video/Video2.jpg';
import videoImg3 from '../../img/video/Video3.jpg';
import videoImg4 from '../../img/video/Video4.jpg';

const Video = () => {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }, [modal]);

  const openModal = () => {
    if (!modal) {
      setModal(!modal);
    }
  };

  const closeModal = () => {
    if (modal) setModal(!modal);
  };

  return (
    <>
      <Helmet>
        <title>Vehicle videos - VAC</title>
      </Helmet>
      <Heading title={'Vehicle Videos'} />
      <div className={styles.section}>
        <div className="container">
          <ResponsiveMasonry columnsCountBreakPoints={{ 320: 1, 1225: 2 }}>
            <Masonry gutter="20px" className={styles.wrapper}>
              <VideoCard
                img={videoImg1}
                title={"VAC's Vehicle Shoot #10: 2018 Chevy Cruze Hatchback"}
                onClick={openModal}
              />
              <VideoCard img={videoImg2} title={"VAC's Vehicle Shoot #11: Toyota Highlander"} onClick={openModal} />
              <VideoCard img={videoImg3} title={"VAC's Vehicle Shoot #09: 2019 Mazda CX-5"} onClick={openModal} />
              <VideoCard img={videoImg4} title={'Some Vehicles VAC Offers!'} onClick={openModal} />
            </Masonry>
          </ResponsiveMasonry>
          <div className={styles.loader}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div
        className={styles.modal + ' ' + `${modal ? '' : styles.modalHidden}`}
        onClick={e => {
          if (e.target.classList.contains(styles.modal)) {
            closeModal();
          }
        }}
      >
        <div className={styles.frame}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/31XXugVOyi0"
            title="Подлая еврейская музыка 10 часов"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Video;
