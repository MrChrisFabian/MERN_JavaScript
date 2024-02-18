class Ninja {
    constructor(nombre, salud, velocidad = 3, fuerza = 3) {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = velocidad;
        this.fuerza = fuerza;
    }

    SayName() {
        console.log(`Ninja name is: ${this.nombre}`);
    }
    ShowStats(){
        this.SayName();
        console.log(`La salud del Ninja es: ${this.salud}`);
        console.log(`La velocidad del Ninja es: ${this.velocidad}`);
        console.log(`La fuerza del Ninja es: ${this.fuerza}`);
    }
    DrinkSake(){
        this.salud+=10; 
        console.log(`La Salud del ninja Aumento...Ahora es: ${this.salud}`)
    }
}

const chris = new Ninja("Chris", 10);
chris.SayName();
console.log("--------------------------------")
chris.ShowStats();
console.log("--------------------------------")
chris.DrinkSake();