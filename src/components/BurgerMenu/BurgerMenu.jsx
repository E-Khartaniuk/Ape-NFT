import React from 'react';
import css from './BurgerMenu.module.css';

import scrollMenuOnClick from 'components/helpers/scrollAndCloseMenu';

function BurgerMenu({ changeMenuColor, showMenu, setShowMenu, screenWidth }) {
  return (
    <nav
      aria-label="Site navigation panel"
      className={`${css.burgerMenuList} ${
        changeMenuColor ? css.chengeMenuListColor : ''
      }`}
    >
      <ul className={css.navList}>
        {showMenu && (
          <li>
            <a
              href="#ABOUT"
              className={`${css.menuItem} ${
                changeMenuColor ? css.chengeMenuItemColor : ''
              }`}
              onClick={e => {
                scrollMenuOnClick(e, setShowMenu, screenWidth);
              }}
            >
              ABOUT
            </a>
          </li>
        )}

        {showMenu && (
          <li>
            <a
              href="#M-MAP"
              className={`${css.menuItem} ${
                changeMenuColor ? css.chengeMenuItemColor : ''
              }`}
              onClick={e => {
                scrollMenuOnClick(e, setShowMenu, screenWidth);
              }}
            >
              M-MAP
            </a>
          </li>
        )}

        {showMenu && (
          <li>
            <a
              href="#FAQ"
              className={`${css.menuItem} ${
                changeMenuColor ? css.chengeMenuItemColor : ''
              }`}
              onClick={e => {
                scrollMenuOnClick(e, setShowMenu, screenWidth);
              }}
            >
              FAQ
            </a>
          </li>
        )}

        {showMenu && (
          <li>
            <a
              href="#ARTS"
              className={`${css.menuItem} ${
                changeMenuColor ? css.chengeMenuItemColor : ''
              }`}
              onClick={e => {
                scrollMenuOnClick(e, setShowMenu, screenWidth);
              }}
            >
              ARTS
            </a>
          </li>
        )}

        {showMenu && (
          <li>
            <a
              href="#MINT"
              className={`${css.menuItem} ${
                changeMenuColor ? css.chengeMenuItemColor : ''
              }`}
              onClick={e => {
                scrollMenuOnClick(e, setShowMenu, screenWidth);
              }}
            >
              MINT
            </a>
          </li>
        )}
      </ul>

      <div
        className={`${css.menuItem} ${
          changeMenuColor ? css.chengeMenuItemColor : ''
        }`}
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? 'CLOSE' : 'MENU'}
      </div>
    </nav>
  );
}

export default BurgerMenu;
