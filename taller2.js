"use strict";
/*Cree una función con un paraḿetro opcional tipo boolean, uno por defecto tipo string,
y uno obligatorio de tipo number. Haga el llamado a la función.*/
function algo(boleano, texto, numero) {
}
let estaFuncion = algo;
console.log(estaFuncion);
/*Cree una variable tipo función que tenga como parámetros dos números y retorne su suma, haga el
llamado a la función.*/
const sumar = (numero1, numero2) => {
    return numero1 + numero2;
};
let resultado = sumar(4, 15);
console.log("el resultado de la suma es: ", resultado);
/*Use setTimeOut para implementar un callback que se llame a los 5 segundos e imprima por consola el
mensaje “HOLA ADSI”*/
setTimeout(() => {
    console.log("Hola ADSO");
}, 5000);
/*Cree una función flecha sin argumentos que imprima “Hola ADSI”.*/
const imprimir = () => "Hola ADSO";
console.log(imprimir);
/*Cree una función flecha que tenga como parámetro edad y retorne un string que le diga al usuario cuál
fue la edad pasada como argumento, imprima el valor devuelto por la función. Use paréntesis para el
parámetro y omita la palabra reservada return.*/
const edadPasada = (edad) => `la edad pasada es ${edad - 1}`;
console.log(edadPasada(34));
/*Cree una función flecha que tenga como parámetros dos números y retorne el producto de éstos,
imprima el valor devuelto por la función. Use paréntesis para agrupar los parámetros, no use la palabra
reservada return.*/
const multiplicar = (factor1, factor2) => factor1 * factor2;
let multiplicacion = multiplicar(5, 7);
console.log(multiplicacion);
/*Cree una función flecha que tenga como parámetros dos números y retorne el módulo de éstos, imprima
el valor devuelto por la función. La función debe tener dos instrucciones, una donde se declare e inicialice
la variable módulo que contendrá el módulo de los dos números y la otra donde se retorne la variable
módulo. Use paréntesis para agrupar los parámetros, use llaves para agrupar las dos instrucciones.*/
const modular = (num1, num2) => {
    const modulo = num1 % num2;
    return modulo;
};
let modulo = modular(3, 6);
console.log(modulo);
//Investigue
/*La desestructuración es una característica que permite
extraer valores de objetos o arreglos y asignarlos
a variables de manera más clara y concisa.*/
//ejemplo
const persona = {
    nombre2: 'Fernando',
    edad2: 21,
    universidad: 'Universidad del Quindio'
};
//Desestructuración de propiedades
const { nombre2, edad2, universidad } = persona;
console.log(nombre2);
console.log(edad2);
console.log(universidad);
//3 ejemplos prácticos diferentes a los planteados en la guía de Typescript.
//cree una función 
