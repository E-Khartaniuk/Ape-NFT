import React from 'react';
import css from './Footer.module.css';

function Footer() {
  return (
    <footer className={css.footerContainer}>
      <small className={css.copyright}>
        © Yacht ape 2024 all rights reserved
      </small>
    </footer>
  );
}

export default Footer;
