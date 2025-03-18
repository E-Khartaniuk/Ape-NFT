import React from 'react';
import PropTypes from 'prop-types';
import css from './MobileMenu.module.css';
// import Discord from 'ui/Discord';
// import Ship from 'ui/Ship';
// import X from 'ui/X';
import scrollMenuOnClick from 'components/helpers/scrollAndCloseMenu';
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

      <nav className={css.mobileMenuContainer}>
        <a
          href="https://discord.com/"
          aria-label="Go to discord"
          className={` ${css.headerLink} ${css.linkBeforeDiscord}`}
        ></a>
        <a
          href="https://opensea.io/"
          aria-label="Go to opensea"
          className={` ${css.headerLink} ${css.linkBeforeShip}`}
        ></a>
        <a
          href="https://twitter.com/"
          aria-label="Go to twitter"
          className={` ${css.headerLink} ${css.linkBeforeX}`}
        ></a>
      </nav>

      <nav aria-label="Site navigation panel">
        <ul className={css.mobileMenuList}>
          <li>
            <a
              href="#ABOUT"
              className={css.mobMenuItem}
              onClick={e => {
                scrollMenuOnClick(e);
                setShowMenu(false);
              }}
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              href="#M-MAP"
              className={css.mobMenuItem}
              onClick={e => {
                scrollMenuOnClick(e);
                setShowMenu(false);
              }}
            >
              M-MAP
            </a>
          </li>
          <li>
            <a
              href="#FAQ"
              className={css.mobMenuItem}
              onClick={e => {
                scrollMenuOnClick(e);
                setShowMenu(false);
              }}
            >
              FAQ
            </a>
          </li>
          <li>
            <a
              href="#ARTS"
              className={css.mobMenuItem}
              onClick={e => {
                scrollMenuOnClick(e);
                setShowMenu(false);
              }}
            >
              ARTS
            </a>
          </li>
          <li>
            <a
              href="#MINT"
              className={css.mobMenuItem}
              onClick={e => {
                scrollMenuOnClick(e);
                setShowMenu(false);
              }}
            >
              MINT
            </a>
          </li>
        </ul>
      </nav>

      <div className={css.mobMenuFooter}>
        © Yacht ape 2024 all rights reserved
      </div>
    </div>
  );
}

MobileMenu.propTypes = {
  setShowMenu: PropTypes.func.isRequired,
  showMenu: PropTypes.bool.isRequired,
};

export default MobileMenu;
