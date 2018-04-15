import React from 'react';
import PropTypes from 'prop-types';
import classNames from './classNames';
import {classes} from './utils';

const {DISPLAY_LIGHT} = classNames;
const digits = [
  0b0111111,
  0b0000110,
  0b1011011,
  0b1001111,
  0b1100110,
  0b1101101,
  0b1111101,
  0b0000111,
  0b1111111,
  0b1101111,
];

const Digit = props => {
  const mask = digits[props.digit];
  const lights = [
    [0.5, 0, 0],
    [21, 0.5, 90],
    [21, 21.5, 90],
    [0.5, 42, 0],
    [0, 21.5, 90],
    [0, 0.5, 90],
    [0.5, 21, 0],
  ].map(([x, y, alpha], index) =>
    <use key={index}
      className={classes(DISPLAY_LIGHT, (mask >> index) & 1 && 'on')}
      href="#dtp-digit-light"
      transform={`translate(${x}, ${y}) rotate(${alpha})`}
    />
  );
  return (
    <g transform={`translate(${props.pos === 1 ? 4.5 : 32.5}, 4.5)`}>
      {lights}
    </g>
  );
};

Digit.propTypes = {
  digit: PropTypes.number,
  pos: PropTypes.number,
};

export default Digit;
