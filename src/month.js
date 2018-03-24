import React from 'react';
import {getWeeksOfMonth} from './dateExtensions';
import {WEEK_DAYS_SHORT} from './ui_strings';
import {rotate, classes} from './utils';
import classNames from './classNames';


const {
  TD_DAY,
  SELECTED_DAY,
  SELECT_DAY,
  TH_DAY,
  TABLE,
  HOVER_SPAN,
} = classNames;

const Week = ({year, month, week, selected}) => {
  const weekRow = week.map((day, index) => {
    const current = {year, month, day};
    const isSelected = 
        ['year', 'month', 'day'].every(
            prop => current[prop] === selected[prop]);
    return (
      <td key={index} 
          className={classes(TD_DAY, isSelected && SELECTED_DAY)}>
        {day > 0 && 
         <span className={classes(HOVER_SPAN, SELECT_DAY)}>{day}</span>
        }
      </td>
    );
  });
  return ( <tr>{weekRow}</tr> );
};

const Month = ({ year, month, selected}) => {
  const weeksOfMonth = getWeeksOfMonth(year, month);
  const weekDays = rotate(WEEK_DAYS_SHORT, 1);
  const weekLabels = weekDays.map(wday => 
      <th key={wday} className={TH_DAY}>{wday}</th>);
  const weekRows = weeksOfMonth.map(([,week], index) => (
    <Week key={index} {...{year, month, week, selected}} />
  ));
  return (
    <table className={TABLE}>
      <thead>
        <tr>{weekLabels}</tr>
      </thead>
      <tbody>
        {weekRows}
      </tbody>
    </table>
  );
};

export default Month;
