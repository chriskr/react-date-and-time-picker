/**
 * According to ISO 8601.
 * Week 1 is the week with the first Thursday.
 * Weeks starting on Monday.
 *
 * Code mainly from https://weeknumber.net/how-to/javascript
 *
 * @param {Date} date - A Date instance.
 * @return {number} The week number of the year.
 */
export function getWeekNumber(date) {
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  // Thursday in current week decides the year.
  // Week starts with Monday, getDay must be rotated accordingly.
  // This may change the year.
  d.setDate(d.getDate() + 3 - (d.getDay() + 6) % 7);
  // January 4 is always in week 1.
  const week1 = new Date(d.getFullYear(), 0, 4);
  // Adjustment to Thursday in week 1 is not needed, the maximum adjustment
  // would be +|- 3/7, which is less than +|- 0.5 from the exacte week delta.
  return 1 +
      Math.round((d.getTime() - week1.getTime()) / (7 * 24 * 60 * 60 * 1000));
}

/**
 * Gets the weeks of a month as tuples with week number and dates in that
 * week. The days belonging to the previous or next month are filled
 * with 0.
 *
 * E.g. getWeeksOfMonth(2017, 10) returns
 *
 * ```javascript
 *   [
 *     [44, [0, 0, 1, 2, 3, 4, 5]],
 *     [45, [6, 7, 8, 9, 10, 11, 12]],
 *     [46, [13, 14, 15, 16, 17, 18, 19]],
 *     [47, [20, 21, 22, 23, 24, 25, 26]],
 *     [48, [27, 28, 29, 30, 0, 0, 0]]
 *   ]
 * ```
 *
 * @param {number} year - The year.
 * @param {number} month - The month.
 * @param {boolean} [startWithMonday=true] - A boolean flag.
 * @return {Array} List of the week tuples with week number and
 * list of week days.
 *
 */
export function getWeeksOfMonth(year, month, startWithMonday = true) {
  let day = 1;
  const date = new Date(year, month, day);
  let startDay = (date.getDay() + (startWithMonday ? 6 : 0)) % 7;
  let dayCount = 28;
  // eslint-disable-next-line
  while (true) {
    date.setDate(dayCount + 1);
    if (date.getMonth() !== month) {
      break;
    }
    dayCount++;
  }

  const weeks = [];
  let week = [];
  while (startDay-- > 0) {
    week.push(0);
  }

  date.setYear(year);
  date.setMonth(month);
  while (day <= dayCount) {
    date.setDate(day);
    week.push(day++);
    if (week.length === 7) {
      weeks.push([getWeekNumber(date), week]);
      week = [];
    }
  }

  if (week.length) {
    while (week.length < 7) {
      week.push(0);
    }
    weeks.push([getWeekNumber(date), week]);
  }

  return weeks;
}
