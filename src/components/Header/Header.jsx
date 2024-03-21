import React, { useEffect, useState } from 'react';
import css from './Header.module.css';
import Logo from 'ui/Logo';
import Discord from 'ui/Discord';
import Ship from 'ui/Ship';
import X from 'ui/X';
import BurgerMenu from 'components/BurgerMenu/BurgerMenu';
import { throttle } from 'lodash';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 300);
    }, 100);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={css.header}>
      <nav>
        <a
          href="/"
          className={`${css.headerLogo} ${isScrolled ? css.hideLogo : ''}`}
        >
          <Logo />
        </a>

        <div className={css.mobileMenuContainer}>
          <BurgerMenu changeMenuColor={isScrolled} />
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
