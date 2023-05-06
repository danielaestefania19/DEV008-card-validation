// iniciar el servidor en el puerto 5000
/* const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hola, mundo!');
});

server.listen(5000, () => {
  console.log('Servidor en ejecución en el puerto 5000');
}); */


// Función para manejar el envío del formulario

// index.js
/* eslint-disable no-undef */
//const validator = require('./validator');
//const { isValid, maskify } = require('./validator.js');
//import { isValid } from './validator.js';
//import * as validator from './validator.js';

import validator from './validator.js';

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


