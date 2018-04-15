import React from 'react';
import ReactDOM from 'react-dom';
import DateTimePicker from 'react-date-and-time-picker';
import 'react-date-and-time-picker/dist/main.css';
import './style.css';

const input = document.querySelector('input');
const pickerContainer = document.querySelector('.date-time-picker-container');
let date = new Date();

const renderPicker = () => {
  const picker = React.createElement(DateTimePicker, {
    date,
    onChange,
  });
  ReactDOM.render(picker, pickerContainer);
};

const removePicker = () => {
  ReactDOM.unmountComponentAtNode(pickerContainer);
};

const onChange = newDate => {
  updateInput(newDate);
  date = newDate;
  renderPicker();
};

const updateInput = date => input.value = date.toGMTString();

const onClick = event => {
  if (!(pickerContainer.contains(event.target) || event.target === input)) {
    removePicker();
  }
};

const onInput = () => {
  const newDate = new Date(input.value);
  if (Number.isInteger(newDate.getTime())) {
    date = newDate;
    renderPicker();
  }
};

input.addEventListener('focus', renderPicker);
input.addEventListener('input', onInput);
document.addEventListener('click', onClick);
updateInput(date);


