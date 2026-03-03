/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 

let arrayPrueba = [1,2,3,4,5,6,7,8]

let [desct1, desct2] = arrayPrueba

console.log(desct1)
console.log(desct2)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

let [desct11, desct22, desct3, desct4, desct5, desct6, desct7, desct8, desct9 = 0] = arrayPrueba

console.log(desct11)
console.log(desct22)
console.log(desct3)
console.log(desct4)
console.log(desct5)
console.log(desct6)
console.log(desct7)
console.log(desct8)
console.log(desct9)

// 3. Usa desestructuración para extraer dos propiedades de un objeto

let objetoPrueba = {
    name: "Caja",
    size: "5x5",
    color: "Marrón",
    quantity: 3
}

let {name, size} = objetoPrueba

console.log(name, size)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

let {color: color1, size: size1} = objetoPrueba

console.log(color1, size1)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

let objetoPrueba2 = {
    name: "Caja",
    size: "5x5",
    color: "Marrón",
    quantity: 3,
    content: {
        type: "Libros",
        quantity: "20"
    }
}

let {name: name2, content: {type: contentType}} = objetoPrueba2

console.log(name2, contentType)


// 6. Usa propagación para combinar dos arrays en uno nuevo

let arrayPrueba2 = [5,2,6,7]

let arrayCombinado = [...arrayPrueba, ...arrayPrueba2]

console.log(arrayCombinado)

// 7. Usa propagación para crear una copia de un array

let arrayCopia = [...arrayPrueba2]
console.log(arrayCopia)

// 8. Usa propagación para combinar dos objetos en uno nuevo

let objetoPrueba3 = {
    location: "Madrid",
    province: "Madrid"
}

let objetoCombinado = {...objetoPrueba, ...objetoPrueba3}

console.log(objetoCombinado)

// 9. Usa propagación para crear una copia de un objeto

let objectoCopia = {...objetoPrueba3}

console.log(objectoCopia)

// 10. Combina desestructuración y propagación


let arrayOriginal = [1, 2, 3, 4, 5]

let [primero, segundo, ...restoArray] = arrayOriginal

console.log(primero)
console.log(segundo)
console.log(restoArray)

let objetoOriginal = {
    name: "Vega",
    age: 26,
    city: "Madrid",
    job: "Developer"
}

let { age, ...resto } = objetoOriginal

console.log(age)   
console.log(resto) 

let objetoNuevo = {
    ...resto,
    city: "Barcelona",
    country: "España"
}

console.log(objetoNuevo)