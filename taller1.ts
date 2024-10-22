//Investige...

//Alcance global con var
//las variables var tiene un alcance global(fuera y dentro del bloque) y pueden reasignarse y redeclarse
var mensajeGlobal = "Hola desde el alcance global";

function miFuncion() {
    //Alcance funcional con var
    var mensajeLocal = "Hola desde una función";

    console.log(mensajeGlobal);
    console.log(mensajeLocal); 

    //Alcance de bloque con let
    //las variables let tiene un algance de bloque y puede reasignarse pero no redeclararse

    let mensajeBloque = "Hola desde un bloque";
        console.log(mensajeBloque); 
    
    // onsole.log(mensajeBloque); // Esto daría un error, ya que mensajeBloque solo existe dentro del bloque

    //Alcance de bloque con const
    //las constantes const tiene un alcance de bloque y no puede ni reasginarse ni redeclararse
    const PI = 3.1416;
    console.log(PI); 
    //PI = 3.14; //Esto daría un error, ya que PI es una constante
}

miFuncion();



//variables logicas
const prendido: boolean = true;
let abierto: boolean = true;
const alto: boolean = false;

//Variables numericas

let casa: number = 2;
const edad: number = 14;

//Variables any

const cualquier: any = [12, 34];
let muchos: any = "hola";

//Variables string

let nombre: string = "Daniel";
const apellido: string = "Abri";

//Plantilla


let nombre1: string = "Paula"
let apellido1: string = "Hernandez"
let genero: string = "Masculino"
let saludo: string

if (genero == "Masculino") {
    saludo = "Bienvenido"
}else {
    saludo = "Bienvenida"
}

console.log(`${saludo} ${nombre1} ${apellido1} a nuestro sitio web gracias por registrarte`);



//Declare e inicialice:

//Una variable array de números que contenga cinco elementos e imprima cada uno de sus elementos.

let numeros: number[] = [1, 2, 3, 4, 5];

numeros.forEach((numero) => {
    console.log(numero);
});

//Una variable array de strings que contenga cinco elementos e imprima cada uno de sus elementos.

const colores: string[] = ["Azul", "Verde", "Rojo", "Amarillo", "Rosado"]

colores.forEach((color) => {
    console.log(color);
});





//Declare e inicialice:

//Una variable tipo objeto cuyos valores sean los días de la semana

const diaseningles: { [key: string]: string } = {
    Domingo: "Sunday",
    lunes: "Monday",
    Martes: "Tuesday",
    Miercoles: "Wednsday",
    Jueves: "Thursday",
    Viernes: "Friday",
    Sabado: "Saturday"
}


//Recorra cada objeto creado usando for-in e imprimiendo cada uno de sus valores

for (const dia in diaseningles) {
    console.log(diaseningles[dia]);
}


//Una variable tipo objeto cuyos valores sean los números del 0 al 9

const numerosNaturales: {[key: number]: string} = {
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine"
};


//Recorra cada objeto creado usando for-in e imprimiendo cada uno de sus valores

for (const numero in numerosNaturales) {
    console.log(numerosNaturales[numero]);
}



//cómo eliminar elementos de un array, agregar elementos, leer y actualizar elementos.
//Implemente ejemplos prácticos.

let paises: string[] = ["Colombia", "Rusia", "Perú", "Brasil", "Ecuador", "Japón"]

// eliminar:
//eliminar el ultimo elemento

paises.pop()

//eliminar el primer elemento

paises.shift()

//eliminar una posición especifica

paises.splice(2)

//agregar
//agregar al final

paises.push("Canadá")

//Agregar al principio

paises.unshift("Venezuela")

//Agregar en una posición especifica 

paises.splice(3, 0, "China")

//leer

paises[1]

//actualizar

paises[2] = "India"


/*cómo eliminar elementos clave-valor de un objeto, cómo leer y actualizar valores. Implemente
ejemplos prácticos*/


let celular: {marca: string, modelo: string, año?: number, color: string } = {
    marca: "Samsung",
    modelo: "S23",
    año: 2023,
    color: "Blanco"
  };
  
  //Leer
  console.log(celular.marca);  
  console.log(celular["modelo"]); 
  
  //Actualizar 

  celular.color = "Negro"
  celular["año"] = 2024; 
  
  console.log(celular);  

  
  //Eliminar

  delete celular.año;
  
  console.log(celular);  

  




//Investigue: Ciclos for y while en TypeScript. Implemente ejemplos prácticos.

//ciclo for
for (let index = 0; index < 10; index++) {
    console.log(`cuenta va en ${index}`);
}


//ciclo while

let contador: number = 1

while (contador <= 10) {
    console.log(`cuenta va en ${contador}`);
    contador++
}

