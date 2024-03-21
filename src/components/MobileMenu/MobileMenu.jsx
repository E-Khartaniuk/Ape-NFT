import React, { useState } from 'react';
import css from './MobileMenu.module.css';

function MobileMenu() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      {/* <ul className={css.mobilemenuList}>
        {showMenu && <li className={css.firstMenuItem}>ABOUT</li>}
        {showMenu && <li className={css.menuItem}>M-MAP</li>}
        {showMenu && <li className={css.menuItem}>FAQ</li>}
        {showMenu && <li className={css.menuItem}>ARTS</li>}

        <li
          onClick={() => {
            setShowMenu(!showMenu);
          }}
          className={css.lastmenuItem}
        >
          MENU
        </li>
      </ul> */}

      <div className={css.mobilemenuList}>
        {showMenu && (
          <a href="/" className={css.menuItem}>
            ABOUT
          </a>
        )}
        {showMenu && (
          <a href="/" className={css.menuItem}>
            M-MAP
          </a>
        )}
        {showMenu && (
          <a href="/" className={css.menuItem}>
            FAQ
          </a>
        )}
        {showMenu && (
          <a href="/" className={css.menuItem}>
            ARTS
          </a>
        )}

        <a
          className={css.menuItem}
          onClick={e => {
            e.preventDefault();
            setShowMenu(!showMenu);
          }}
        >
          MENU
        </a>
      </div>
    </>
  );
}

export default MobileMenu;
