// NUEVO CODIGO 
// validator.js

const validator = {
  isValid: function(creditCardNumber) {
   //console.log("Hola Dadi estoy validando....")
    // Eliminar cualquier espacio en blanco y guiones
    creditCardNumber = creditCardNumber.replace(/\s+/g, '').replace(/-/g, '');
    // implementar el algoritmo de Luhn para validar el número de tarjeta de crédito
    // verificar si el número es válido
    const digits = creditCardNumber.split('').map(Number);
    let sum = 0;
    for (let i = digits.length - 1; i >= 0; i--) {
      let digit = digits[i];
      if ((digits.length - i) % 2 === 0) {
        digit *= 2;
        if (digit >= 10) {
          digit -= 9;
        }
      }
      sum += digit;
    } 

    //return sum % 10 === 0;
    const result = sum % 10 === 0;
    console.log(result);
    return result;
  },

  maskify: function(creditCardNumber) {
    if (creditCardNumber.length <= 4) {
      return creditCardNumber;
    } else {
      const lastFour = creditCardNumber.slice(-4);
      const mask = "#".repeat(creditCardNumber.length - 4);
      return mask + lastFour;
    }
  },

  detectCreditCardType: function(creditCardNumber) {
    const visaPattern = /^4/;
    const mastercardPattern = /^5[1-5]/;

    if (creditCardNumber.match(visaPattern)) {
      return "Visa";
    } else if (creditCardNumber.match(mastercardPattern)) {
      return "MasterCard";
    } else {
      return "Desconocido";
    }
  }
};

//module.exports = validator;
//window.validator = validator;    
export default validator; 
