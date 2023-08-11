
// Calculadora de edad:
// Pregunta al usuario su año de nacimiento y muestra su edad actual utilizando la 
// función prompt.

function calcularEdad() {
    const anioNacimiento = parseInt(prompt("Ingresa el año de nacimiento:"));

    if (isNaN(anioNacimiento)) {
        alert("Ingresar un año válido.");
        return;
    }

    const edad = 2023 - anioNacimiento;
    alert(`Tu edad es ${edad} años.`);
}


// Conversión de moneda:
// Solicita al usuario que ingrese una cantidad en dólares y muestra su equivalente 
// en otra moneda (por ejemplo, euros) utilizando un factor de conversión. 
// Puedes utilizar prompt para obtener la cantidad y alert para mostrar el resultado.

function convertirMoneda() {
    const dolares = parseInt(prompt("Ingresa la cantidad de Dolares a convertir a Euros:"));
    
    if (isNaN(dolares)) {
        alert("Ingresar un número válido");
        return;
    }
    let cantEuros = dolares * 0.9;
    alert(`${dolares} dolares equivalen a ${cantEuros} euros.`);
}



//Calculadora de Propina
// Solicitar el monto de la cuenta y porcentaje de propina (prompt)
// Calcular la propina a partir del monto 
// Mostrar: (alert) 
//  Cuenta
//  Porcentaje de Propina
//  Monto de la Propina
//  Total a Pagar 


function calculadoraPropina() {
    const montoCuenta = parseInt(prompt("Ingresa el monto de la cuenta ($):"));
    const porcentajePropina = parseInt(prompt("Ingresa el Porcentaje de Propina (%):"));

    if (isNaN(montoCuenta) || isNaN(porcentajePropina)) {
        alert("Ingresar un número válido");
        return;
    }

    let propina = porcentajePropina * montoCuenta / 100 ;
    let total = montoCuenta + propina;

    let mensaje = `Monto de la Cuenta: $ ${montoCuenta}`; 

    mensaje += "\n" + `Porcentaje de Propina: ${porcentajePropina} % `;
    mensaje += "\n" + `Monto de la Propina: $ ${propina}`;
    mensaje += "\n" + `Total a Pagar: $ ${total}`;
    alert(mensaje);
}


// Verificar Contraseña:
// Crea un programa que solicite al usuario ingresar una contraseña. 
// Luego, compara esa contraseña con una contraseña predefinida y 
// muestra un mensaje si la contraseña es correcta o incorrecta.

function verificarContrasenia() {
    
    const contraseniaIngresada  = prompt("Ingresala contraseña:");

    if ( contraseniaIngresada == "HolaMundo") {
        alert("La contraseña es Correcta");
               
    } else{
        alert("La contraseña es incorrecta");
    }
}


// Comparación de Números Pares:
// Escribe un programa que determine si un número ingresado por el usuario es par o impar. 
//Imprime un mensaje apropiado para cada caso.


function numerosPares() {

    const nroIngresado = parseInt(prompt("Ingrese el Número:"));

    if (isNaN(nroIngresado)) {
        alert("Ingresar un número válido");
        return;
    }

    if (nroIngresado % 2 === 0) {
        alert("El número ingresado es Par");
               
    } else{
        alert("El número ingresado es imPar");
    }
}



// La Jubilación
// 1)En este ejercicio, crearás un programa que le indique a las mujeres si están en edad, 
//    o no, de jubilarse (en Argentina, las mujeres pueden jubilarse a los 60 años).
// Pedile al usuario que ingrese su edad y guardá este valor en una Variable. 
// A partir de ese input, infórmale si puede jubilarse o no.
// 2) En este ejercicio, modificarás tu programa para informar, tanto a las mujeres 
// como a los hombres, si están en edad de jubilarse (en Argentina, los hombres pueden 
// jubilarse a los 65 años).
// Para esto, además de preguntar la edad del usuario deberás confirmar si es hombre o mujer.
// Te recomendamos empezar con dos bloques if.
// 3) Optimizá tu código de modo que, todo el ejercicio, se resuelva con un solo if. 
// Usá operadores lógicos y de relación.

function jubilacion() {
    
    const sexo  = prompt("Ingres se sexo (M ó F):");
    const edad = parseInt(prompt("Ingrese su edad"));

 
    if (isNaN(edad)) {
        alert("Error: Ingresar un número válido");
        return;
    }

    if (sexo != "m" && sexo != "M" && sexo != "f" && sexo != "F") {
        alert("Error debe Ingresar M ó F");
        return;
    }


    if ( ((sexo == "m" || sexo == "M") && (edad >=65)) || ( (sexo == "f" || sexo == "F") && (edad >=60)))  {
            alert(`Puede Jubilarse - Es ${sexo} y tiene ${edad} años`);
        } else {
            alert(`No Puede Jubilarse - Es ${sexo} y tiene ${edad} años`);
            }
}


