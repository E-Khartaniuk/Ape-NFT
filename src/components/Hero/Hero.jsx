import React from 'react';
import css from './Hero.module.css';
import closeMenuOnClick from 'components/helpers/scrollAndCloseMenu';

function Hero() {
  return (
    <section className={css.heroSection}>
      <div className={css.heroSectionContainer}>
        <span className={css.headerTitleAboveText}>diD yOu seE iT ?</span>

        <h1 className={css.heroTitle}>YACHT APES</h1>

        <span className={css.headerUnderText}>Apes aRe eveRywhere</span>

        <div className={css.heroImgBG}></div>

        <button
          type="button"
          href="#MEET APES"
          className={css.heroBtn}
          onClick={e => closeMenuOnClick(e)}
        >
          MEET APES
        </button>

        <p className={css.heroDescription}>
          <span className={css.spaces}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          Yacht Ape is a collection of unique digital apes that you can own in
          NFT format
        </p>
      </div>
    </section>
  );
}

export default Hero;
