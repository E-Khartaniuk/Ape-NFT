import React from 'react';
import css from './HaveNoLimits.module.css';
import cross from '../../img/svg/cross.svg';

function HaveNoLimits() {
  return (
    <section className={css.rotating_text_container}>
      <div className={css.rotating_text}>
        {[...Array(7)].map((_, index) => (
          <React.Fragment key={index}>
            <img src={cross} alt="cross" className={css.cross} />
            <span className={css.text}>Have No Limits</span>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default HaveNoLimits;
