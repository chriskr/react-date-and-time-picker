import React from 'react';
import PropTypes from 'prop-types';
import {MONTH_NAMES} from './ui_strings';
import {classes, Enum, TargetManager, getDefaultLineHeight} from './utils';
import classNames from './classNames';
import Month from './month';
import SelectMonth from './selectMonth';
import SelectYear from './selectYear';
import Time from './time';
import './index.css';

const {
  ROOT,
  HOVER_SPAN,
  SELECTED,
  HEADER_ROW,
  HEADER_MONTH,
  HEADER_YEAR,
  MAIN_SECTION,
  FOOTER_ROW,
  SELECT_DAY,
  SELECT_MONTH,
  SELECT_YEAR,
  SELECT_TIME,
  SELECT_CALENDAR,
  SELECT_TODAY,
  PREVIOUS_MONTH,
  PREVIOUS_HOUR,
  PREVIOUS_MINUTE,
  NEXT_MONTH,
  NEXT_HOUR,
  NEXT_MINUTE,
  CANCEL_CHANGES,
  VIEW_DAYS,
  VIEW_MONTHS,
  VIEW_YEARS,
  VIEW_TIME,
  FILLER,
  ICON_CHEVRON_LEFT,
  ICON_CHEVRON_RIGHT,
  ICON_EVENT,
  ICON_SCHEDULE,
  ICON_ADJUST,
  ICON_CANCEL,
  MATERIAL_ICONS,
  MATERIAL_ICONS_ROUND,
} = classNames;

const targetManager = new TargetManager({
  click: [
    SELECT_DAY,
    SELECT_MONTH,
    SELECT_YEAR,
    SELECT_TIME,
    HEADER_MONTH,
    HEADER_YEAR,
    NEXT_MONTH,
    NEXT_HOUR,
    NEXT_MINUTE,
    PREVIOUS_MONTH,
    PREVIOUS_HOUR,
    PREVIOUS_MINUTE,
    SELECT_CALENDAR,
    SELECT_TODAY,
    CANCEL_CHANGES,
  ],
});

const [
  DAYS,
  MONTHS,
  YEARS,
  TIME,
] = Enum();

const modeViewsMap = new Map([
  [DAYS, VIEW_DAYS],
  [MONTHS, VIEW_MONTHS],
  [YEARS, VIEW_YEARS],
  [TIME, VIEW_TIME],
]);

const TRACK_PAD_SCROLL_THRESHOLD = 25;

const getLineHeight = (() => {
  let lineHeight = 0;
  return () => {
    if (lineHeight === 0) {
      lineHeight = getDefaultLineHeight() || 18;
    }
    return lineHeight;
  };
})();

class DateTimePicker extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      mode: DAYS,
      deltaYear: 0,
      startDate: new Date(this.props.date),
      selectedDate: this.props.date.getDate(),
    };
    this.onClick = this.onClick.bind(this);
    this.onWheel = this.onWheel.bind(this);
    this._pickerBody = null;
    this._deltaY = 0;
  }

  onClick (event) {
    const {target, className} = targetManager.getTarget(event);

    switch (className) {
    case SELECT_DAY: {
      const date = new Date(this.props.date);
      date.setDate(Number.parseInt(target.textContent, 10));
      this.setState({selectedDate: date.getDate()});
      this.props.onChange(date);
      break;
    }

    case NEXT_MONTH:
    case PREVIOUS_MONTH: {
      switch (this.state.mode) {
      case DAYS: {
        const delta = className === PREVIOUS_MONTH ? -1 : 1;
        const date = new Date(this.props.date);
        this.setMonth(date, date.getMonth() + delta);
        this.props.onChange(date);
        break;
      }

      case YEARS: {
        const delta = className === PREVIOUS_MONTH ? -9 : 9;
        this.setState(
          (prevState) => ({deltaYear: prevState.deltaYear + delta}));
        break;
      }

      case TIME: {
        const delta = className === PREVIOUS_MONTH ? -15 : 15;
        const date = new Date(this.props.date);
        let minutes = date.getMinutes();
        if (minutes % 15 !== 0) {
          minutes = Math.round(minutes / 15) * 15;
        }
        date.setMinutes(minutes + delta);
        this.props.onChange(date);
        break;
      }

      default:
      }
      break;
    }

    case HEADER_MONTH:
      this.setState(
        prevState => ({mode: prevState.mode === MONTHS ? DAYS : MONTHS}));
      break;

    case HEADER_YEAR:
      this.setState(
        prevState => ({mode: prevState.mode === YEARS ? DAYS : YEARS}));
      break;

    case SELECT_MONTH: {
      const date = new Date(this.props.date);
      this.setMonth(date, Number.parseInt(target.dataset.month, 10));
      this.setState({mode: DAYS});
      this.props.onChange(date);
      break;
    }

    case SELECT_TIME:
      this.setState(
        prevState => ({mode: prevState.mode === TIME ? DAYS : TIME}));
      break;

    case SELECT_YEAR: {
      const date = new Date(this.props.date);
      this.setYear(date, Number.parseInt(target.textContent, 10));
      this.setState({mode: DAYS, deltaYear: 0});
      this.props.onChange(date);
      break;
    }

    case NEXT_HOUR:
    case PREVIOUS_HOUR: {
      const delta = className === PREVIOUS_HOUR ? -1 : 1;
      const date = new Date(this.props.date);
      date.setHours(date.getHours() + delta);
      this.props.onChange(date);
      break;
    }

    case NEXT_MINUTE:
    case PREVIOUS_MINUTE: {
      const delta = className === PREVIOUS_MINUTE ? -1 : 1;
      const date = new Date(this.props.date);
      date.setMinutes(date.getMinutes() + delta);
      this.props.onChange(date);
      break;
    }

    case SELECT_CALENDAR:
      this.setState({mode: DAYS});
      break;

    case SELECT_TODAY:
      this.props.onChange(new Date());
      break;

    case CANCEL_CHANGES:
      this.props.onChange(this.state.startDate);
      break;

    default:
    }
  }

  onWheel (event) {
    this._deltaY += event.deltaY * (
      event.deltaMode === WheelEvent.DOM_DELTA_LINE ?
        getLineHeight() :
        1
    );
    if (Math.abs(this._deltaY) < TRACK_PAD_SCROLL_THRESHOLD) {
      return;
    }
    this._deltaY = 0;
    switch (this.state.mode) {
    case YEARS: {
      const delta = event.deltaY > 0 ? 3 : -3;
      this.setState(
        (prevState) => ({deltaYear: prevState.deltaYear + delta}));
      break;
    }

    case TIME: {
      const box = this._pickerBody.getBoundingClientRect();
      const delta = event.deltaY > 0 ? 1 : -1;
      const date = new Date(this.props.date);
      if (event.clientX < (box.left + box.width / 2)) {
        date.setHours(date.getHours() + delta);
      } else {
        date.setMinutes(date.getMinutes() + delta);
      }
      this.props.onChange(date);
      break;
    }

    default:
    }
  }

  setYear (date, year) {
    const month = date.getMonth();
    date.setFullYear(year);
    this.retainMonthAndSelectedDate(date, month);
  }

  setMonth (date, month) {
    date.setMonth(month);
    this.retainMonthAndSelectedDate(date, month);
  }

  retainMonthAndSelectedDate (date, month) {
    while (month < 0) {
      month = (month + 12) % 12;
    }
    if (date.getMonth() > month) {
      while (date.getMonth() > month) {
        date.setDate(date.getDate() - 1);
      }
    } else if (date.getDate() < this.state.selectedDate) {
      const testDate = new Date(date);
      while (date.getDate() < this.state.selectedDate) {
        testDate.setDate(date.getDate() + 1);
        if (date.getMonth() === testDate.getMonth()) {
          date.setDate(date.getDate() + 1);
        } else {
          break;
        }
      }
    }
  }

  getBody (year, month, selected) {
    switch (this.state.mode) {
    case DAYS:
      return <Month {...{year, month, selected}} />;

    case MONTHS:
      return <SelectMonth />;

    case YEARS:
      return <SelectYear year={year + this.state.deltaYear} />;

    case TIME:
      return (
        <Time
          hours={this.props.date.getHours()}
          minutes={this.props.date.getMinutes()}
          useRoundMaterialIcons={this.props.useRoundMaterialIcons}
        />
      );
    default:

    }
  }

  render() {
    const date = this.props.date;
    const year = date.getFullYear();
    const month = date.getMonth();
    const selected = {
      year: this.props.date.getFullYear(),
      month: this.props.date.getMonth(),
      day: this.props.date.getDate(),
    };
    return (
      <div className={ROOT}
        onClick={this.onClick}
        onWheel={this.onWheel}
      >
        <div className={HEADER_ROW}>
          <span className={classes(HOVER_SPAN, PREVIOUS_MONTH)}>
            <i className={classes(
              MATERIAL_ICONS,
              this.props.useRoundMaterialIcons && MATERIAL_ICONS_ROUND,
              ICON_CHEVRON_LEFT
            )}
            />
          </span>
          <span className={FILLER}/>
          <span className={classes(HOVER_SPAN, HEADER_MONTH,
            this.state.mode === MONTHS && SELECTED)}
          >
            {MONTH_NAMES[month]}
          </span>
          <span className={classes(HOVER_SPAN, HEADER_YEAR,
            this.state.mode === YEARS && SELECTED)}
          >
            {year}
          </span>
          <span className={FILLER}/>
          <span className={classes(HOVER_SPAN, NEXT_MONTH)}>
            <i className={classes(
              MATERIAL_ICONS,
              this.props.useRoundMaterialIcons && MATERIAL_ICONS_ROUND,
              ICON_CHEVRON_RIGHT
            )}
            />
          </span>
        </div>
        <div ref={div => {this._pickerBody = div;}}
          className={classes(MAIN_SECTION, modeViewsMap.get(this.state.mode))}
        >
          {this.getBody(year, month, selected)}
        </div>
        <div className={FOOTER_ROW}>
          <span className={classes(HOVER_SPAN, SELECT_TIME)}>
            <i className={classes(MATERIAL_ICONS,
              this.props.useRoundMaterialIcons && MATERIAL_ICONS_ROUND,
              this.state.mode === TIME ?
                ICON_EVENT :
                ICON_SCHEDULE)}
            />
          </span>
          <span className={classes(HOVER_SPAN, SELECT_TODAY)}>
            <i className={classes(
              MATERIAL_ICONS,
              this.props.useRoundMaterialIcons && MATERIAL_ICONS_ROUND,
              ICON_ADJUST
            )}
            />
          </span>
          <span className={classes(HOVER_SPAN, CANCEL_CHANGES)}>
            <i className={classes(
              MATERIAL_ICONS,
              this.props.useRoundMaterialIcons && MATERIAL_ICONS_ROUND,
              ICON_CANCEL
            )}
            />
          </span>
        </div>
      </div>
    );
  }
}

DateTimePicker.propTypes = {
  date: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
  useRoundMaterialIcons: PropTypes.bool,
};

export default DateTimePicker;
