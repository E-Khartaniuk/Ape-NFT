import { React } from 'react';
import { useSwiper } from 'swiper/react';

import css from './SlideNextButton.module.css';

export default function SlidePrevButton() {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slidePrev()} className={css.slideNextButton}>
      Prev
    </button>
  );
}
