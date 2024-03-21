import React from 'react';
import css from './Header.module.css';
import Logo from 'ui/Logo';
import Discord from 'ui/Discord';
import Ship from 'ui/Ship';
import X from 'ui/X';
import MobileMenu from 'components/MobileMenu/MobileMenu';

function Header() {
  return (
    <header className={css.header}>
      <nav>
        <a href="/" className={css.headerLogo}>
          <Logo />
        </a>

        <div>
          <MobileMenu />
        </div>

        <a href="https://discord.com/" className={css.headerLink}>
          <Discord />
        </a>

        <a
          href="https://terra.vet/wp-content/uploads/59.jpg"
          className={css.headerLink}
        >
          <Ship />
        </a>

        <a href="https://twitter.com/" className={css.headerLink}>
          <X />
        </a>
      </nav>
    </header>
  );
}

export default Header;
