/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

// Comentario

// 2. Escribe un comentario en varias líneas

/*
Comentario
varias
líneas
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let myString = "Esto es un string"

let myInt = 2

let myBoolean = true

let mySymbol = Symbol("Este es mi símbolo")

let myUndefined = undefined

let myNull = null

let myBigInt = BigInt(94864596546745967945)

// 4. Imprime por consola el valor de todas las variables
 
console.log(myString)
console.log(myInt)
console.log(myBoolean)
console.log(mySymbol)
console.log(myUndefined)
console.log(myNull)
console.log(myBigInt)

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof myString)
console.log(typeof myInt)
console.log(typeof myBoolean)
console.log(typeof mySymbol)
console.log(typeof myUndefined)
console.log(typeof myNull)
console.log(typeof myBigInt)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

myString = "Esto es otro string"

myInt = 5

myBoolean = false

mySymbol = Symbol("Este es otro símbolo")

myUndefined = undefined

myNull = null

myBigInt = BigInt(43534543534534534)

console.log(myString)
console.log(myInt)
console.log(myBoolean)
console.log(mySymbol)
console.log(myUndefined)
console.log(myNull)
console.log(myBigInt)

console.log(typeof myString)
console.log(typeof myInt)
console.log(typeof myBoolean)
console.log(typeof mySymbol)
console.log(typeof myUndefined)
console.log(typeof myNull)
console.log(typeof myBigInt)

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

myString = 4

myInt = "Ahora esto es un string"

myBoolean = Symbol("Ahora esto es un symbol")

mySymbol = true

myUndefined = null

myNull = undefined

myBigInt = 5

console.log(myString)
console.log(myInt)
console.log(myBoolean)
console.log(mySymbol)
console.log(myUndefined)
console.log(myNull)
console.log(myBigInt)

console.log(typeof myString)
console.log(typeof myInt)
console.log(typeof myBoolean)
console.log(typeof mySymbol)
console.log(typeof myUndefined)
console.log(typeof myNull)
console.log(typeof myBigInt)

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const myString2 = "Esto es otro string"
const myInt2 = 5
const myBoolean2 = false
const mySymbol2 = Symbol("Este es otro símbolo")
const myUndefined2 = undefined
const myNull2 = null
const myBigInt2 = BigInt(43534543534534534)

console.log(myString2)
console.log(myInt2)
console.log(myBoolean2)
console.log(mySymbol2)
console.log(myUndefined2)
console.log(myNull2)
console.log(myBigInt2)

console.log(typeof myString2)
console.log(typeof myInt2)
console.log(typeof myBoolean2)
console.log(typeof mySymbol2)
console.log(typeof myUndefined2)
console.log(typeof myNull2)
console.log(typeof myBigInt2)

// 9. A continuación, modifica los valores de las constantes

/*
myString2 = "Esto es otro string"

myInt2 = 5

myBoolean2 = false

mySymbol2 = Symbol("Este es otro símbolo")

myUndefined2 = undefined

myNull2 = null

myBigInt2 = BigInt(43534543534534534)
*/

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

console.log("Líneas que producen error comentadas")