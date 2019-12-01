import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const links = ['info', 'rsvp', 'schedule', 'gifts', 'fun'];

const Header = ({ onNavClick, hidden }) => {
  return (
    <header id="header" className={classNames({ hidden })}>
      <div className="content">
        <div className="inner">
          <h1>James & Su-Zen’s Wedding</h1>
          <p>Thursday, August 6th 2020</p>
        </div>
      </div>
      <nav>
        <ul>
          {links.map(x => (
            <li key={x}>
              <button
                type="button"
                aria-label={x}
                onClick={() => onNavClick(x)}
                style={{ backgroundImage: `url('/static/images/${x}.png'` }}
              />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

Header.defaultProps = {
  hidden: false,
};

Header.propTypes = {
  onNavClick: PropTypes.func.isRequired,
  hidden: PropTypes.bool,
};

export default Header;
