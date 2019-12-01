import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ onConfettiClick, confetti }) => {
  return (
    <footer id="footer">
      <button type="button" onClick={() => onConfettiClick()}>
        {confetti ? 'Stop' : 'Confetti!'}
      </button>
    </footer>
  );
};

Footer.defaultProps = {
  confetti: false,
};

Footer.propTypes = {
  onConfettiClick: PropTypes.func.isRequired,
  confetti: PropTypes.bool,
};

export default Footer;
