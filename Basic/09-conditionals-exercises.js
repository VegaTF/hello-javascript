/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let nombre = "Jorge"

if (nombre = "Jorge") {
    console.log(nombre)
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let usuario = "admin"
let contrasena = "1234"

if (usuario == "admin" && contrasena == "1234") {
    console.log("Credenciales correctas")
} else {
    console.log("Credenciales incorrectas")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let num = 0

if (num > 0) {
    console.log("El número es positivo")
} else if (num < 0) {
    console.log("El número es negativo")
} else {
    console.log("El número es cero")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let edad = 17

if (edad >= 18) {
    console.log("Puedes votar")
} else {
    console.log("No puedes votar")
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

console.log(edad >= 18 ? "Eres un adulto" : "Eres un menor")

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = "Febrero"

if (mes == "Enero" || mes == "Febrero" || mes == "Diciembre") {
    console.log("Es invierno")
} else if (mes == "Marzo" || mes == "Abril" || mes == "Mayo") {
    console.log("Es primavera")
} else if (mes == "Junio" || mes == "Julio" || mes == "Agosto") {
    console.log("Es verano")
} else if (mes == "Septiembre" || mes == "Octubre" || mes == "Noviembre") {
    console.log("Es otoño")
} else {
    console.log("Introduce un mes váido")
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

mes = "Febrero";

if (mes == "Enero" || mes == "Marzo" || mes == "Mayo" || mes == "Julio" || mes == "Agosto" || mes == "Octubre" || mes == "Diciembre") {
    console.log(`El mes de ${mes} tiene 31 días`);
} else if (mes == "Abril" || mes == "Junio" || mes == "Septiembre" || mes == "Noviembre") {
    console.log(`El mes de ${mes} tiene 30 días`);
} else if (mes == "Febrero") {
    console.log(`El mes de ${mes} tiene 28 días`);
} else {
    console.log("Mes inválido");
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let idioma = "ESP"

switch (idioma) {
    case ("ESP"):
        console.log("¡Hola!")
        break
    case("ENG"):
        console.log("Hello!")
        break
    default:
        console.log("Introduce ESP o ENG")
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6

let mesSwitch = "Febrero";

switch (mesSwitch) {
    case "Diciembre":
    case "Enero":
    case "Febrero":
        console.log("Es invierno");
        break;
    case "Marzo":
    case "Abril":
    case "Mayo":
        console.log("Es primavera");
        break;
    case "Junio":
    case "Julio":
    case "Agosto":
        console.log("Es verano");
        break;
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
        console.log("Es otoño");
        break;
    default:
        console.log("Introduce un mes válido");
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7

switch (mesSwitch) {
    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto":
    case "Octubre":
    case "Diciembre":
        console.log(`El mes de ${mesSwitch} tiene 31 días`);
        break;
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
        console.log(`El mes de ${mesSwitch} tiene 30 días`);
        break;
    case "Febrero":
        console.log(`El mes de ${mesSwitch} tiene 28 días`);
        break;
    default:
        console.log("Mes inválido");
}