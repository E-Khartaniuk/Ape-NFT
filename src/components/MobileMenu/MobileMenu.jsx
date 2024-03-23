import React from 'react';
import css from './MobileMenu.module.css';
import Discord from 'ui/Discord';
import Ship from 'ui/Ship';
import X from 'ui/X';
import closeMenuOnClick from 'components/helpers/scrollAndCloseMenu';
import Logo from 'ui/Logo';

function MobileMenu({ setShowMenu, showMenu }) {
  return (
    <div className={css.soctialLinkContainer}>
      <div className={css.menuItem} onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? 'CLOSE' : 'MENU'}
      </div>

      <a href="/" className={css.menuLogo}>
        <Logo />
      </a>

      <div className={css.mobileMenuContainer}>
        <div href="https://discord.com/" className={css.headerLink}>
          <Discord />
        </div>
        <a href="https://opensea.io/" className={css.headerLink}>
          <Ship />
        </a>
        <a href="https://twitter.com/" className={css.headerLink}>
          <X />
        </a>
      </div>

      <div className={css.mobileMenuList}>
        <a
          href="#ABOUT"
          className={css.mobMenuItem}
          onClick={e => {
            closeMenuOnClick(e);
            setShowMenu(false);
          }}
        >
          ABOUT
        </a>

        <a
          href="#M-MAP"
          className={css.mobMenuItem}
          onClick={e => {
            closeMenuOnClick(e);
            setShowMenu(false);
          }}
        >
          M-MAP
        </a>

        <a
          href="#FAQ"
          className={css.mobMenuItem}
          onClick={e => {
            closeMenuOnClick(e);
            setShowMenu(false);
          }}
        >
          FAQ
        </a>

        <a
          href="#ARTS"
          className={css.mobMenuItem}
          onClick={e => {
            closeMenuOnClick(e);
            setShowMenu(false);
          }}
        >
          ARTS
        </a>

        <a
          href="#MINT"
          className={css.mobMenuItem}
          onClick={e => {
            closeMenuOnClick(e);
            setShowMenu(false);
          }}
        >
          MINT
        </a>
      </div>
      <div className={css.mobMenuFooter}>
        {/* <Footer /> */}© Yacht ape 2024 all rights reserved
      </div>
    </div>
  );
}

export default MobileMenu;
