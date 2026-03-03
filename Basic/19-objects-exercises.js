/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades

let object1 = {
    name: "Jorge",
    age: "26",
    alias: "Vega"
}

// 2. Accede y muestra su valor

console.log(object1)

// 3. Agrega una nueva propiedad

object1.email = "vega@mail.com"
console.log(object1)

// 4. Elimina una de las 3 primeras propiedades

delete object1.age
console.log(object1)

// 5. Agrega una función e invócala

object1.talk = function (boolean) {
    if (boolean === true) {
        console.log(object1.name + " está hablando")
    } else {
        console.log(object1.name + " NO está hablando")
    }
}

object1.talk(false)

// 6. Itera las propiedades del objeto

for (let key in object1) {
    console.log(key + ": " + object1[key])
}

// 7. Crea un objeto anidado

let object2 = {
    name: "Álvaro",
    age: 32,
    alias: "Alvis",
    study: {
        name: "Desarrollo de Aplicaciones Web",
        duration: 2
    }
}

// 8. Accede y muestra el valor de las propiedades anidadas

console.log(object2.study.name)
console.log(object2.study.duration)

// 9. Comprueba si los dos objetos creados son iguales

console.log(object1 === object2)

console.log(object1 == object2)

// 10. Comprueba si dos propiedades diferentes son iguales

console.log(object1.name === object2.name)
console.log(object1.name == object2.name)