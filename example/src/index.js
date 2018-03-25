import React from 'react';
import ReactDOM from 'react-dom';
import DateTimePicker from 'react-date-and-time-picker';
import 'react-date-and-time-picker/dist/main.css';
import './style.css';

const input = document.querySelector('input');
const pickerContainer = document.querySelector('.date-time-picker-container');

let date = new Date();
date.setFullYear(1997);

const updateInput = date => input.value = date.toGMTString();

const onChange = newDate => {
  updateInput(newDate);
  date = newDate;
  show();
};

input.addEventListener('input', () => {
  const newDate = new Date(input.value);
  if (Number.isInteger(newDate.getTime())) {
    date = newDate;
    show();
  }
});

const show = () => {
  const pane = React.createElement(DateTimePicker, {
    date,
    onChange,
  });
  ReactDOM.render(pane, pickerContainer);
};

const hide = () => {
  ReactDOM.unmountComponentAtNode(pickerContainer);
}

const handleClick = event => {
  if (event.target === input) {

  } else if (!pickerContainer.contains(event.target)) {
    hide();
  }
}

updateInput(date);
input.addEventListener('focus', show);
document.addEventListener('click', handleClick);


