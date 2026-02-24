/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética

let a = 5
let b = 2

let suma = a + b
let resta = a - b
let multiplicacion = a * b
let division = a / b
let modulo = a % b
let potencia = a ** b

console.log("Suma:", suma)
console.log("Resta:", resta)
console.log("Multiplicación:", multiplicacion)
console.log("División:", division)
console.log("Módulo:", modulo)
console.log("Potencia:", potencia)


// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

a++
b++

let asignacionSuma = a
asignacionSuma += b

let asignacionResta = a
asignacionResta -= b

let asignacionMultiplicacion = a
asignacionMultiplicacion *= b

let asignacionDivision = a
asignacionDivision /= b

let asignacionModulo = a
asignacionModulo %= b

let asignacionPotencia = a
asignacionPotencia **= b

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log(10 > 5)
console.log(5 < 10)
console.log(10 >= 10)
console.log(5 <= 5)
console.log(10 === 10)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(5 > 10)
console.log(10 < 5)
console.log(5 >= 10)
console.log(10 <= 5)
console.log(10 === 5)

// 5. Utiliza el operador lógico and

a = 10
b = 5

console.log(a > 5 && b < 10)

// 6. Utiliza el operador lógico or

a = 10
b = 5

console.log(a < 5 || b < 10)

// 7. Combina ambos operadores lógicos

a = 10
b = 5
let c = 20

console.log((a > b && c > a) || b > c)

// 8. Añade alguna negación

a = 10
b = 5
c = 20

console.log(!(a < b) && !(c < a))

// 9. Utiliza el operador ternario

a = 10
b = 5

let resultado = a > b ? "a es mayor" : "b es mayor o igual"

console.log(resultado)

// 10. Combina operadores aritméticos, de comparáción y lógicas

a = 10
b = 5
c = 20

console.log((a + b > c / 2) && (a * b !== c))