import React from 'react';


class Header extends React.Component {
    render() {
      return (
      <header className="header flex">
      <div className="header__mobile-content container max-width-lg">
        <a href="#0" className="header__logo">
          <svg width="130" height="52" viewBox="0 0 130 32">
          <title>Go to homepage</title>
          <circle fill="var(--color-primary)" cx="24" cy="24" r="16"/>
          <rect fill="var(--color-contrast-higher)" x="41" y="11" width="89" height="10"/>
          </svg>
        </a>
      </div>
      <div className="header__nav" role="navigation">
        <div className="header__nav-grid justify-between@md container max-width-lg">
          <ul className="header__list flex-grow flex-basis-0 justify-end@md">
            <li className="header__item"><a href="#0" className="f-header__link">Media</a></li>
            <li className="header__item"><a href="#0" className="f-header__link">Dealers</a></li>
            <li className="header__item"><a href="#0" className="btn btn--primary">Publica tu anuncio</a></li>
          </ul>
        </div>
      </div>
    </header>
    );
    }
  }

export default Header;
