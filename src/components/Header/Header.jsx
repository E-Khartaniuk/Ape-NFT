import React, { useEffect, useState } from 'react';
import { throttle } from 'lodash';
import BurgerMenu from 'components/BurgerMenu/BurgerMenu';
import css from './Header.module.css';
import Logo from 'ui/Logo';
import Discord from 'ui/Discord';
import Ship from 'ui/Ship';
import X from 'ui/X';

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
          screenWidth={screenWidth}
        />
      )}
      {showMenu && <MobileMenu setShowMenu={setShowMenu} showMenu={showMenu} />}

      <nav className={css.navFixed}>
        {!showMenu && (
          <div
            className={`${css.menuItem} ${
              isScrolled ? css.chengeMenuItemColor : ''
            }`}
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? 'CLOSE' : 'MENU'}
          </div>
        )}
        <a
          href="https://e-khartaniuk.github.io/Ape-NFT/"
          className={`${css.headerLogo} ${isScrolled ? css.hideLogo : ''}`}
        >
          <Logo />
        </a>

        {/* <ul className={css.mobileMenuContainer}>
          <li>
            <a
              href="https://discord.com/"
              aria-label="Go to discord"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className={`${css.headerLink} ${
                isScrolled ? css.headerLinkChangeColor : ''
              }`}
            >
              <Discord />
            </a>
          </li>
          <li>
            <a
              href="https://opensea.io/"
              aria-label="Go to opensea"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className={`${css.headerLink} ${
                isScrolled ? css.headerLinkChangeColor : ''
              }`}
            >
              <Ship />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/"
              aria-label="Go to twitter"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className={`${css.headerLink} ${
                isScrolled ? css.headerLinkChangeColor : ''
              }`}
            >
              <X />
            </a>
          </li>
        </ul> */}
      </nav>
    </header>
  );
}

export default Header;
