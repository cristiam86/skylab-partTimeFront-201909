import React from 'react';


class Header extends React.Component {
    render() {
      return (
      <header class="header flex">
      <div class="header__mobile-content container max-width-lg">
        <a href="#0" class="header__logo">
          <svg width="130" height="52" viewBox="0 0 130 32">
            <title>Go to homepage</title>
            <circle fill="var(--color-primary)" cx="24" cy="24" r="16"/>
            <rect fill="var(--color-contrast-higher)" x="41" y="11" width="89" height="10"/>
          </svg>
        </a>
      </div>
      <div class="header__nav" role="navigation">
        <div class="header__nav-grid justify-between@md container max-width-lg">
          <ul class="header__list flex-grow flex-basis-0 justify-end@md">
            <li class="header__item"><a href="#0" class="f-header__link">Media</a></li>
            <li class="header__item"><a href="#0" class="f-header__link">Dealers</a></li>
            <li class="header__item"><a href="#0" class="btn btn--primary">Publica tu anuncio</a></li>
          </ul>
        </div>
      </div>
    </header>
    );
    }
  }

export default Header;
