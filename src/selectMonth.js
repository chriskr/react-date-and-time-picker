import React from 'react';
import {MONTH_NAMES_SHORT} from './ui_strings';
import classNames from './classNames';

const {
  TABLE,
  HOVER_SPAN,
  SELECT_MONTH,
} = classNames;

const SelectMonth = () => {
  const rows = [];
  let row;
  MONTH_NAMES_SHORT.forEach((name, index) => {
    if (index % 3 === 0) {
      row = [];
      rows.push(row);
    }
    row.push(
      <td key={index} data-month={String(index)} className={SELECT_MONTH}>
        <span className={HOVER_SPAN}>{name}</span>
      </td>
    );
  });
  return (
    <table className={TABLE}>
      <tbody>
        {rows.map((tableRow, index) => <tr key={index}>{tableRow}</tr>)}
      </tbody>
    </table>
  );
};

export default SelectMonth;
