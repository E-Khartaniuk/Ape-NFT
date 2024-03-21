import React from 'react';

import css from './SuccessRegister.module.css';

function SuccessRegister() {
  return (
    <section className={css.successRegisterContainer}>
      <h2 className={css.successRegisterTitle}>
        Successful <br />
        registration!
      </h2>
    </section>
  );
}

export default SuccessRegister;
