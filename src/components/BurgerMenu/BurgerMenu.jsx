import React from 'react';
import css from './BurgerMenu.module.css';

import closeMenuOnClick from 'components/helpers/scrollAndCloseMenu';

function BurgerMenu({ changeMenuColor, showMenu, setShowMenu }) {
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
          className={`${css.menuItem} ${
            changeMenuColor ? css.chengeMenuItemColor : ''
          }`}
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
          className={`${css.menuItem} ${
            changeMenuColor ? css.chengeMenuItemColor : ''
          }`}
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
          className={`${css.menuItem} ${
            changeMenuColor ? css.chengeMenuItemColor : ''
          }`}
          onClick={e => {
            closeMenuOnClick(e);
            setShowMenu(false);
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
            closeMenuOnClick(e);
            setShowMenu(false);
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
