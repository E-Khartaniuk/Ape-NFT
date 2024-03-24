import React from 'react';
import css from './BurgerMenu.module.css';

import scrollMenuOnClick from 'components/helpers/scrollAndCloseMenu';

function BurgerMenu({ changeMenuColor, showMenu, setShowMenu, screenWidth }) {
  return (
    <div
      className={`${css.burgerMenuList} ${
        changeMenuColor ? css.chengeMenuListColor : ''
      }`}
    >
      {showMenu && (
        <a
          href="#ABOUT"
          className={`${css.menuItem} ${
            changeMenuColor ? css.chengeMenuItemColor : ''
          }`}
          onClick={e => {
            scrollMenuOnClick(e, setShowMenu, screenWidth);
            // if (screenWidth >= 1280) return;
            // setShowMenu(false);
          }}
        >
          ABOUT
        </a>
      )}

      {showMenu && (
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
      )}

      {showMenu && (
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
      )}
      {showMenu && (
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
      )}

      {showMenu && (
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
      )}

      <div
        className={`${css.menuItem} ${
          changeMenuColor ? css.chengeMenuItemColor : ''
        }`}
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? 'CLOSE' : 'MENU'}
      </div>
    </div>
  );
}

export default BurgerMenu;
