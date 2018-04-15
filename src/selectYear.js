import React from 'react';
import PropTypes from 'prop-types';
import {range} from './utils';
import classNames from './classNames';

const {TABLE, HOVER_SPAN, SELECT_YEAR} = classNames;

const SelectYear = ({year: startYear}) => {
  const rows = [];
  let row;
  Array.from(range(startYear + 5, startYear - 4)).forEach((year, index) => {
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
      <tbody>{rows.map((tableRow, index) =>
        <tr key={index}>{tableRow}</tr>)}
      </tbody>
    </table>
  );
};

SelectYear.propTypes = {
  year: PropTypes.number,
};

export default SelectYear;
