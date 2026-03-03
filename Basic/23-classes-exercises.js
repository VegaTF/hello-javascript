/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades

// 2. Añade un método a la clase que utilice las propiedades

class Empleado {
    constructor(name, department) {
        this.name = name
        this.department = department
    }
    mostrarInfo() {
        console.log(`El empleado ${this.name} está en el departamento ${this.department}`)
    }
    static queEmpresa() {
    console.log("El nombre de la empresa es 'Vega S.L'")
    }
}

let empleado1 = new Empleado("Jorge", "Informática")

// 3. Muestra los valores de las propiedades e invoca a la función

console.log(empleado1)
empleado1.mostrarInfo()

// 4. Añade un método estático a la primera clase

// 5. Haz uso del método estático

Empleado.queEmpresa()

// 6. Crea una clase que haga uso de herencia
// 7. Crea una clase que haga uso de getters y setters
// 8. Modifica la clase con getters y setters para que use propiedades privadas
// 9. Utiliza los get y set y muestra sus valores
// 10. Sobrescribe un método de una clase que utilice herencia

class Vehiculo {

    #modelo;

    constructor(modelo, matricula, km) {
        this.#modelo = modelo;
        this.matricula = matricula;
        this.km = km;
    }

    get modelo() {
        return this.#modelo;
    }

    set modelo(nuevoModelo) {
        this.#modelo = nuevoModelo;
    }

    mostrarInfo() {
        console.log(`Vehículo: ${this.#modelo}, Matrícula: ${this.matricula}, KM: ${this.km}`);
    }
}

class Coche extends Vehiculo {

    constructor(modelo, matricula, km, combustible) {
        super(modelo, matricula, km);
        this.combustible = combustible;
    }

    mostrarInfo() {
        console.log(`Coche: ${this.modelo}, Matrícula: ${this.matricula}, KM: ${this.km}, Combustible: ${this.combustible}`);
    }
}

let coche1 = new Coche("Audi A4", "4968ABC", 150000, "Diesel");

console.log(coche1.modelo);

coche1.modelo = "BMW Serie 3";

console.log(coche1.modelo);

coche1.mostrarInfo();