import React from 'react';
import css from './MindMap.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import SlideNextButton from './SlideNextButton';
import SlidePrevButton from './SlidePrevButton';
import MindMapCard from 'components/MindMapCard/MindMapCard';
import MindMapCardLink from 'components/MindMapCardLink/MindMapCardLink';

function MindMap() {
  return (
    <section id="M-MAP" className={css.mindMapSection}>
      <h2 className={css.mindMapTitle}>MIND MAP</h2>
      <div className={css.swiperHide}>
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          className={css.swiperHide}
        >
          <div className={css.swiperSlideContainer}>
            <div>
              <SwiperSlide>
                <MindMapCard cardTitle={'YAPE DROP'}>
                  All owners of APE NFTs and all future collections will receive
                  a percentage of sales based on the number of NFTs they own{' '}
                </MindMapCard>
              </SwiperSlide>

              <SwiperSlide>
                <MindMapCard cardTitle={'New Collection'}>
                  Launch of the 2nd YACHT Collection Releasing the first version
                  of the Ape Slam Game
                </MindMapCard>
              </SwiperSlide>

              <SwiperSlide>
                <MindMapCard cardTitle={'Token'}>
                  Launch your own token, the proceeds of which will go to a
                  global fund to LAUNCH YACHT CLUB AND PROMOTE it
                </MindMapCard>
              </SwiperSlide>

              <SwiperSlide></SwiperSlide>
            </div>
          </div>

          <div className={css.buttonContainer}>
            <SlidePrevButton />
            <SlideNextButton />
          </div>
        </Swiper>
      </div>

      <div className={css.cardsOn768Width}>
        <MindMapCard cardTitle={'YAPE DROP'}>
          All owners of APE NFTs and all future collections will receive a
          percentage of sales based on the number of NFTs they own
        </MindMapCard>{' '}
        <MindMapCard cardTitle={'New Collection'}>
          Launch of the 2nd YACHT Collection Releasing the first version of the
          Ape Slam Game
        </MindMapCard>
        <MindMapCard cardTitle={'Token'}>
          Launch your own token, the proceeds of which will go to a global fund
          to LAUNCH YACHT CLUB AND PROMOTE it
        </MindMapCard>
        <MindMapCardLink />
      </div>
    </section>
  );
}

export default MindMap;
