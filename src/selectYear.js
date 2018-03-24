import React from 'react';
import {range} from './utils';
import classNames from './classNames';

const {TABLE, HOVER_SPAN, SELECT_YEAR} = classNames;

const SelectMonth = ({year, month, selected}) => {
  const rows = [];
  let row; 
  Array.from(range(year + 5, year - 4)).forEach((year, index) => {
    if (index % 3 === 0) {
      rows.push(row = []);
    }
    row.push( 
      <td key={index} className={SELECT_YEAR}>
        <span className={HOVER_SPAN}>{year}</span>
      </td>
    );
  });

  return (
    <table className={TABLE}>
      <tbody>{rows.map((row, index) => <tr key={index}>{row}</tr>)}</tbody>
    </table>
  );
};

export default SelectMonth;
