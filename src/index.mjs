// index.js
/* eslint-disable no-undef */
//const validator = require('./validator');
//const { isValid, maskify } = require('./validator.js');
//import { isValid } from './validator.js';
import * as validator from './validator.js';

const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  const input = document.querySelector('input');
  const creditCardNumber = input.value;

  if (creditCardNumber === '') {
    alert('Por favor ingrese un número de tarjeta de crédito válido.');
    return;
  }

  const isValid = validator.isValid(creditCardNumber);
  const maskedNumber = validator.maskify(creditCardNumber);

  if (isValid) {
    alert(`El número de tarjeta de crédito ${maskedNumber} es válido.`);
  } else {
    alert(`El número de tarjeta de crédito ${maskedNumber} no es válido.`);
  }

  input.value = '';
});
