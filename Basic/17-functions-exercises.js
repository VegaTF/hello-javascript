/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function funSuma(a, b) {
    return a + b
}

console.log(funSuma(3, 4))

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

function funMayorDeArray(array) {
    let mayor = array[0]
    let i = 1

    while (i < array.length) {
        if (array[i] > mayor) {
            mayor = array[i]
        }
        i++
    }

    return mayor
}

let arrayNum = [3, 7, 1, 9, 5, 6, 6]

console.log(funMayorDeArray(arrayNum))

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

function contVocales (string) {
    let cuenta = 0
    let i = 0
    let vocales = ["a","e","i","o","u"]

    while (string.length > i) {
        if (vocales.includes(string[i].toLowerCase())) {
            cuenta++
        }
        i++
    }
    return cuenta
}

let stringEjemplo = "Esto es un string de ejemplo para contar vocales"

console.log(contVocales(stringEjemplo))

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

function arrayMayusc (array) {
    let resultado = []
    let i = 0

    while (i < array.length) {
        resultado.push(array[i].toUpperCase())
        i++
    }
    
    return resultado
}

let arrayPrueba = ["Hola que tal", "Me llamo Vega", "Estos son 3 arrays", "Que se van a pasar a mayúsculas"]

console.log(arrayMayusc(arrayPrueba))

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function esPrimo(n) {
    if (n <= 1) return false

    let i = 2

    while (i < n) {
        if (n % i === 0) {
            return false
        }
        i++
    }

    return true
}

console.log(esPrimo(7))
console.log(esPrimo(9))

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

function elemComunes (array1, array2) {
    let i = 0
    let resultado = []

    while (i < array2.length) {
        if (array1.includes(array2[i])) {
            resultado.push(array2[i])
        }
        i++
    }

    return resultado
}

let arrayPrueba1 = ["Hola que", "tal mi nombre", "es Jorge", "tengo 26 años"]
let arrayPrueba2 = ["Hola que", "tal mi nombre", "es Vega", "tengo 25 años"]
console.log(elemComunes(arrayPrueba1, arrayPrueba2))

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

function sumNumPares (array) {
    let i = 0
    let resultado = 0

    while (i < array.length) {
        if (array[i] % 2 === 0) {
            resultado += array[i]
        }
    i++
    }

    return resultado
}

arrayNum = [3,6,2,6,8,7,34,6,4,2,67]
console.log(sumNumPares(arrayNum))

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

function numCuadrado (array) {
    let i = 0
    let resultado = []

    while (i < array.length) {
        resultado.push(array[i] ** 2)
        i++
    }

    return resultado
} 

console.log(numCuadrado(arrayNum))

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

function invertirPalabras(texto) {
    let palabras = texto.split(" ")
    let i = palabras.length - 1
    let resultado = ""

    while (i >= 0) {
        resultado += palabras[i]

        if (i !== 0) {
            resultado += " "
        }

        i--
    }

    return resultado
}

let frase = "Hola soy Vega y estoy practicando"
console.log(invertirPalabras(frase))

// 10. Crea una función que calcule el factorial de un número dado

function factorial(n) {
    if (n < 0) return undefined

    let resultado = 1
    let i = 1

    while (i <= n) {
        resultado *= i
        i++
    }

    return resultado
}

console.log(factorial(5))
console.log(factorial(0))