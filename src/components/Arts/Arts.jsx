import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SlideNextButton from 'components/MindMap/SlideNextButton';
import SlidePrevButton from 'components/MindMap/SlidePrevButton';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';

import css from './Arts.module.css';

import collectionImages from './collectionData';
import ArtsCollectionCard from 'components/ArtsCollectionCard/ArtsCollectionCard';

function Collection() {
  const collectionImagesData = collectionImages();
  return (
    <section id="ARTS" className={css.collectionSection}>
      <h2 className={css.collectionTitle}>COLLECTION</h2>
      <Swiper slidesPerView={1} centeredSlides={true}>
        <div className={css.swiperSlideContainer}>
          <ul>
            {collectionImagesData.map(({ id, image }) => {
              return (
                <li key={id}>
                  <SwiperSlide>
                    <ArtsCollectionCard image={image} />
                  </SwiperSlide>
                </li>
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
