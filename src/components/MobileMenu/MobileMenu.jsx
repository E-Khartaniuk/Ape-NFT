import React, { useState } from 'react';
import css from './MobileMenu.module.css';
import Discord from 'ui/Discord';
import Ship from 'ui/Ship';
import X from 'ui/X';
import closeMenuOnClick from 'components/helpers/scrollAndCloseMenu';

function MobileMenu() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={css.soctialLinkContainer}>
      <div className={css.mobileMenuContainer}>
        <a href="https://discord.com/" className={css.headerLink}>
          <Discord />
        </a>
        <a href="https://opensea.io/" className={css.headerLink}>
          <Ship />
        </a>
        <a href="https://twitter.com/" className={css.headerLink}>
          <X />
        </a>
      </div>

      <div className={css.burgerMenuList}>
        {showMenu && (
          <a
            href="#ABOUT"
            className={css.menuItem}
            onClick={e => {
              closeMenuOnClick(e);
              setShowMenu(false);
            }}
          >
            ABOUT
          </a>
        )}
        {showMenu && (
          <a
            href="#M-MAP"
            className={css.menuItem}
            onClick={e => {
              closeMenuOnClick(e);
              setShowMenu(false);
            }}
          >
            M-MAP
          </a>
        )}
        {showMenu && (
          <a
            href="#FAQ"
            className={css.menuItem}
            onClick={e => {
              closeMenuOnClick(e);
              setShowMenu(false);
            }}
          >
            FAQ
          </a>
        )}
        {showMenu && (
          <a
            href="#ARTS"
            className={css.menuItem}
            onClick={e => {
              closeMenuOnClick(e);
              setShowMenu(false);
            }}
          >
            ARTS
          </a>
        )}

        <a className={css.menuItem} onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? 'CLOSE' : 'MENU'}
        </a>
      </div>
    </div>
  );
}

export default MobileMenu;
