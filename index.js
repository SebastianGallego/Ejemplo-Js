
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


