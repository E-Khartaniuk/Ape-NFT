import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SlideNextButton from 'components/MindMap/SlideNextButton';
import SlidePrevButton from 'components/MindMap/SlidePrevButton';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';

import css from './Arts.module.css';

import collectionImages from './collectionData';
import ArtsCollectionCard from 'components/ArtsCollectionCard/ArtsCollectionCard';
import { throttle } from 'lodash';

function Collection() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const [numberOfitems, setNumberOfitems] = useState(1);

  const collectionImagesData = collectionImages();

  useEffect(() => {
    const getWindowWidth = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 768) {
        setNumberOfitems(1);
      } else if (768 <= screenWidth && screenWidth < 1280) {
        setNumberOfitems(2);

        return;
      } else if (screenWidth >= 1280) {
        setNumberOfitems(4);
        console.log('screenWidth', screenWidth);

        return;
      }
    };

    getWindowWidth();
  }, [screenWidth]);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    const throttledResize = throttle(handleResize, 100);
    window.addEventListener('resize', throttledResize);

    return () => {
      window.removeEventListener('resize', throttledResize);
    };
  }, []);

  return (
    <section id="ARTS" className={css.collectionSection}>
      <h2 className={css.collectionTitle}>COLLECTION</h2>
      <Swiper
        slidesPerView={numberOfitems}
        wrapperClass={css.swiperWrapper}
        slideClass={css.swiperSlide}
        className={css.swiperArts}
      >
        <div className={css.swiperSlideContainer}>
          <ul>
            {collectionImagesData.map(({ id, image }) => {
              return (
                <div key={id}>
                  <SwiperSlide className={css.swiperSlide}>
                    <ArtsCollectionCard image={image} />
                  </SwiperSlide>
                </div>
              );
            })}
          </ul>
        </div>

        <div className={css.buttonContainer}>
          <SlidePrevButton />
          <SlideNextButton />
        </div>
      </Swiper>
    </section>
  );
}

export default Collection;
