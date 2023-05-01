    
          // Función para validar tarjetas de crédito
          function validateCreditCardNumber(creditCardNumber) {
            // Eliminar cualquier espacio en blanco y guiones
            creditCardNumber = creditCardNumber.replace(/\s+/g, '').replace(/-/g, '');
      
            // Verificar si el número es válido
            if (/^\d{13,16}$/.test(creditCardNumber)) {
              // Calcular el dígito de verificación
              var sum = 0;
              var digit;
              var addend;
              var even = false;
              for (var i = creditCardNumber.length - 1; i >= 0; i--) {
                digit = parseInt(creditCardNumber.charAt(i));
                if (even) {
                  addend = digit * 2;
                  if (addend > 9) {
                    addend -= 9;
                  }
                } else {
                  addend = digit;
                }
                sum += addend;
                even = !even;
              }
              return (sum % 10) == 0;
            } else {
              return false;
            }
          }
      
          // Función para manejar el envío del formulario
          function handleSubmit(event) {
            event.preventDefault();
            var creditCardNumber = document.getElementById("credit-card-number").value;
            if (validateCreditCardNumber(creditCardNumber)) {
              alert("El número de tarjeta de crédito es válido.");
            } else {
              alert("El número de tarjeta de crédito no es válido.");
            }
          }
      
          // Agregar un escucha de eventos al formulario
          var form = document.querySelector("form");
          form.addEventListener("submit", handleSubmit);
      
          // Agregar un escucha de eventos al campo de entrada
          var creditCardNumberInput = document.getElementById("credit-card-number");
          creditCardNumberInput.addEventListener("input", function() {
            var maskedNumber = "";
            var unmaskedLength = creditCardNumberInput.value.length - 4;
            for (var i = 0; i < unmaskedLength; i++) {
              maskedNumber += "*";
            }
            maskedNumber += creditCardNumberInput.value.substring(unmaskedLength);
            creditCardNumberInput.value = maskedNumber;
          });

      