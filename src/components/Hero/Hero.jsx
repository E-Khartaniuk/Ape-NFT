import React from 'react';
import css from './Hero.module.css';
import heroImg from '../../img/Hero_Img_6s1.png';

function Hero() {
  return (
    <section className={css.heroSection}>
      <span className={css.headerTitleAboveText}>diD yOu seE iT ?</span>
      <h1 className={css.heroTitle}>YACHT APES</h1>
      <span className={css.headerUnderAboveText}>Apes aRe eveRywhere</span>
      <img src={heroImg} alt="hero" className={css.heroImg} />
      <button type="button" className={css.heroBtn}>
        MEET APES
      </button>
      <p className={css.heroDescription}>
        Yacht Ape is a collection of unique digital apes that you can own in NFT
        format
      </p>
    </section>
  );
}

export default Hero;
