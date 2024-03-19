import { React } from 'react';
import { useSwiper } from 'swiper/react';

import css from './SlideNextButton.module.css';

export default function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slideNext()} className={css.slideNextButton}>
      Next
    </button>
  );
}
