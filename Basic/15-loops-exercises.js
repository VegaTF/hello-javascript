/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

for (let i = 1; i < 21; i++) {
    console.log(i)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let suma = 0
for (let i = 1; i < 101; i++) {
    suma += i
}
console.log(suma)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

for (let i = 1; i < 51; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

let arrayNombres = ["Jorge", "Álvaro", "Patri", "Fer", "Alberto", "Jose"]

for (let value of arrayNombres) {
    console.log(value)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let cadenaTexto = "Hola que tal, vamos a contar las vocales"
let cuenta = 0
let vocales = ["a","e","i","o","u"]

for (let value of cadenaTexto.toLowerCase()) {
    if (vocales.includes(value)) {
        cuenta++
    }
}

console.log(cuenta)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let arrayNumeros = [1,2,3,4,5,6,7,8]
let resultado = 1

for (let values of arrayNumeros) {
    resultado *= values
}

console.log(resultado)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

let numero = 5

for (let i = 0; i < 11; i++) {
    console.log(`${numero} x ${i} = ${numero * i} `)
}

// 8. Usa un bucle para invertir una cadena de texto

let cadenaTextoInvertida = ""

for (let i = cadenaTexto.length - 1; i >= 0; i--) {
    cadenaTextoInvertida += cadenaTexto[i]
}
console.log(cadenaTextoInvertida)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let a = 0;
let b = 1;

console.log(a); // 0
console.log(b); // 1

for (let i = 3; i <= 10; i++) {
    let siguiente = a + b;
    console.log(siguiente);
    a = b;
    b = siguiente;
}

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let arrayNumeros2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
let mayoresA10 = []

for (let value of arrayNumeros2) {
    if (value > 10) {
        mayoresA10.push(value)
    }
}

console.log(mayoresA10)