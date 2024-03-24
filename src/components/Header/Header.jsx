import React, { useEffect, useState } from 'react';
import css from './Header.module.css';
import Logo from 'ui/Logo';
import Discord from 'ui/Discord';
import Ship from 'ui/Ship';
import X from 'ui/X';
import BurgerMenu from 'components/BurgerMenu/BurgerMenu';
import { throttle } from 'lodash';

import MobileMenu from 'components/MobileMenu/MobileMenu';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 300);
    }, 100);

    const handleResize = throttle(() => {
      setScreenWidth(window.innerWidth);
    }, 100);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenWidth >= 1280) {
      setShowMenu(true);
    } else if (screenWidth >= 768 && screenWidth <= 1279) {
      setShowMenu(false);
    }
  }, [screenWidth]);

  return (
    <header className={css.header}>
      {showMenu && (
        <BurgerMenu
          changeMenuColor={isScrolled}
          setShowMenu={setShowMenu}
          showMenu={showMenu}
        />
      )}
      {showMenu && <MobileMenu setShowMenu={setShowMenu} showMenu={showMenu} />}

      <nav className={css.navFixed}>
        <div
          className={`${css.menuItem} ${
            isScrolled ? css.chengeMenuItemColor : ''
          }`}
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? 'CLOSE' : 'MENU'}
        </div>
        <a
          href="/"
          className={`${css.headerLogo} ${isScrolled ? css.hideLogo : ''}`}
        >
          <Logo />
        </a>

        <div className={css.mobileMenuContainer}>
          <a
            href="https://discord.com/"
            className={`${css.headerLink} ${
              isScrolled ? css.headerLinkChangeColor : ''
            }`}
          >
            <Discord />
          </a>
          <a
            href="https://opensea.io/"
            className={`${css.headerLink} ${
              isScrolled ? css.headerLinkChangeColor : ''
            }`}
          >
            <Ship />
          </a>
          <a
            href="https://twitter.com/"
            className={`${css.headerLink} ${
              isScrolled ? css.headerLinkChangeColor : ''
            }`}
          >
            <X />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
