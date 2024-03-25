import React from 'react';
import css from './MobileMenu.module.css';
import Discord from 'ui/Discord';
import Ship from 'ui/Ship';
import X from 'ui/X';
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
          className={css.headerLink}
        >
          <Discord />
        </a>
        <a
          href="https://opensea.io/"
          aria-label="Go to opensea"
          className={css.headerLink}
        >
          <Ship />
        </a>
        <a
          href="https://twitter.com/"
          aria-label="Go to twitter"
          className={css.headerLink}
        >
          <X />
        </a>
      </nav>

      <nav
        //  className={css.mobileMenuList}
        aria-label="Site navigation panel"
      >
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
          </li>{' '}
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
          </li>{' '}
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
            </a>{' '}
          </li>
        </ul>
      </nav>

      <div className={css.mobMenuFooter}>
        © Yacht ape 2024 all rights reserved
      </div>
    </div>
  );
}

export default MobileMenu;
