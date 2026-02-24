/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto

let a = "Hola!"
let b = "Qué tal?"

console.log(a + " " + b)

// 2. Muestra la longitud de una cadena de texto

console.log(a.length)

// 3. Muestra el primer y último carácter de un string

console.log(a[0] + " " + a[a.length - 1])


// 4. Convierte a mayúsculas y minúsculas un string

console.log(a.toLowerCase())
console.log(a.toUpperCase())

// 5. Crea una cadena de texto en varias líneas

console.log(`Hola
esto es un
string en varias
lineas`)

// 6. Interpola el valor de una variable en un string

console.log(`${a} ${b}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones

let myString = "Hola voy a sustituir los espacios"

console.log(myString.replaceAll(" ", "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(myString.includes("voy"))

// 9. Comprueba si dos strings son iguales

console.log(a === b)

// 10. Comprueba si dos strings tienen la misma longitud

console.log(a.length === b.length)