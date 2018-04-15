import React from 'react';
import PropTypes from 'prop-types';
import classNames from './classNames';
import {classes} from './utils';
import Digit from './digit';

const {
  TIME_CONTAINER,
  TIME_CONTROLS,
  HOVER_SPAN,
  NEXT_HOUR,
  PREVIOUS_HOUR,
  NEXT_MINUTE,
  PREVIOUS_MINUTE,
  ICON_EXPAND_LESS,
  ICON_EXPAND_MORE,
  MATERIAL_ICONS,
  DIGITS,
} = classNames;

const Controls = ({next, previous}) =>
  <div className={TIME_CONTROLS}>
    <span className={classes(HOVER_SPAN, previous)}>
      <i className={classes(MATERIAL_ICONS, ICON_EXPAND_LESS)}/>
    </span>
    <span className={classes(HOVER_SPAN, next)}>
      <i className={classes(MATERIAL_ICONS, ICON_EXPAND_MORE)}/>
    </span>
  </div>
;

Controls.propTypes = {
  next: PropTypes.string,
  previous: PropTypes.string,
};

const Time = (props) => {
  const {hours, minutes} = props;
  return (
    <div className={TIME_CONTAINER}>
      <Controls previous={PREVIOUS_HOUR} next={NEXT_HOUR}/>
      <svg viewBox="0 0 140 51"
        width="140px"
        height="51px"
        className={DIGITS}
      >
        <defs>
          <path id="dtp-digit-light"
            d="M 0 0 L 2.5 2.5 17.5 2.5 20 0 17.5 -2.5 2.5 -2.5 Z"
          />
        </defs>
        <g>
          <Digit digit={(hours / 10) | 0} pos={1}/>
          <Digit digit={hours % 10} pos={0}/>
        </g>
        <g transform="translate(70, 2)">
          <circle cx="0" r="2" cy="13" />
          <circle cx="0" r="2" cy="34" />
        </g>
        <g transform="translate(82, 0)">
          <Digit digit={(minutes / 10) | 0} pos={1}/>
          <Digit digit={minutes % 10} pos={0}/>
        </g>
      </svg>
      <Controls previous={PREVIOUS_MINUTE} next={NEXT_MINUTE}/>
    </div>
  );
};

Time.propTypes = {
  hours: PropTypes.number,
  minutes: PropTypes.number,
};

export default Time;
