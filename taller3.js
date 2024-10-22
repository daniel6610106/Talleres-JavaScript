"use strict";
/*Cree y ejecute una promesa que siempre se resuelva, y que lo haga con un string “Somos
programadores, hacemos mover el mundo”, de tal manera que en su .then, se imprima tal string mediante
console.log*/
let miPromesa = new Promise((resolve) => {
    resolve("Somos programadores, hacemos mover el mundo");
});
miPromesa.then((mensaje) => {
    console.log(mensaje);
});
/*Cree y ejecute una promesa que siempre se rechace, y que lo haga con un string “Ha ocurrido un error
desconocido.”, de tal manera que en su .catch, se imprima tal string mediante console.log*/
let miPromesa1 = new Promise((resolve, reject) => {
    reject("Ha ocurrido un error desconocido.");
});
miPromesa
    .catch((error) => {
    console.log(error);
});
/*La entrega de subsidios en una institución pública depende de si el estrato de la persona es menor o igual
a 2. Cree un programa que implemente una variable que guarde el estrato del usuario, y mediante la
evaluación de tal variable, muestre si el usuario tiene derecho o no a un subsidio usando promesas, de tal
manera que si la variable contiene un valor numérico entre 1 y 6, la promesa se resuelva con un string
que indique si el usuario tiene o no derecho al subsidio, tal string deberá ser imprimido en el .then de la
promesa con console.log. En caso de que la variable contenga un valor nó válido la promesa se debe
rechazar lanzando el siguiente error: new Error("Estrato no válido"), tal error debe ser mostrado en
el .catch de la promesa de la siguiente manera: console.log('Ha ocurrido un error: ', err.message),
tenga en cuenta que err, es la información del error(motivo de rechazo) que se pasa desde el
reject al catch como parámetro de nombre err.*/
let estrato = 3; // Cambia el valor de estrato para probar diferentes escenarios
let verificarSubsidio = new Promise((resolve, reject) => {
    if (estrato >= 1 && estrato <= 6) {
        if (estrato <= 2) {
            resolve("El usuario tiene derecho a un subsidio.");
        }
        else {
            resolve("El usuario NO tiene derecho a un subsidio.");
        }
    }
    else {
        reject(new Error("Estrato no válido"));
    }
});
verificarSubsidio
    .then((mensaje) => {
    console.log(mensaje);
})
    .catch((err) => {
    console.log('Ha ocurrido un error: ', err.message);
});
/*Cree una promesa que implemente 4 métodos .then en cadena de tal manera que la promesa se
resuelva inicialmente con el valor 2 <resolve(2)> y los siguientes métodos .then eleven al
cuadrado el valor pasado, imprimiendo al final el mensaje “el valor final es: X” donde x es el
resultado final del encadenamiento*/
let miPromesa2 = new Promise((resolve) => {
    resolve(2); // Resolvemos la promesa con el valor 2
});
miPromesa2
    .then((valor) => {
    return valor * valor; // Eleva al cuadrado (2^2)
})
    .then((valor) => {
    return valor * valor; // Eleva al cuadrado nuevamente
})
    .then((valor) => {
    return valor * valor; // Eleva al cuadrado nuevamente
})
    .then((valorFinal) => {
    console.log(`El valor final es: ${valorFinal}`); // Imprime el resultado final
});
/*Cree tres promesas promesa1, promesa2 y promesa3, de tal manera que la promesa1 siempre
se resuelva con la cadena “Somos ADSI”, que la promesa2 tenga dos opciones, resolverse o
rechazarse; de tal forma que si se resuelva lo haga con la cadena “ Somos programadores” ,
pero si se rechaza lo haga lanzando un error “Promesa 2 no cumplida” (use una variable y un
condicional doble para controlar la resolución o rechazo de la promesa, p.e. una variable estado,
velocidad, edad etc). Por último, la promesa3 siempre se debe resolver con la cadena “,
Hacemos mover el mundo”. Encadene las promesas de tal manera que cuando la promesa1 se
cumpla, imprima desde su .then el mensaje con el que se resolvió y retorne la promesa2 y
cuando ésta última se cumpla, imprima desde su .then el mensaje con el que se resolvió y
retorne la promesa3, y cuando la promesa 3 se cumpla imprima desde su .then el mensaje con
el que se resolvió. Implemente .catch para manejar el error que puede ocurrir en la promesa2, en
caso de que ocurra el rechazo, imprima el mensaje del error mediante err.message.*/
// Promesa 1: Siempre se resuelve con "Somos ADSI"
let promesa11 = new Promise((resolve) => {
    resolve("Somos ADSI");
});
// Promesa 2: Puede resolverse o rechazarse dependiendo de una condición (por ejemplo, una variable 'estado')
let estado = true; // Cambia este valor a false para que la promesa se rechace
let promesa21 = new Promise((resolve, reject) => {
    if (estado) {
        resolve("Somos programadores");
    }
    else {
        reject(new Error("Promesa 2 no cumplida"));
    }
});
// Promesa 3: Siempre se resuelve con "Hacemos mover el mundo"
let promesa31 = new Promise((resolve) => {
    resolve("Hacemos mover el mundo");
});
// Encadenamos las promesas
promesa11
    .then((mensaje1) => {
    console.log(mensaje1); // Imprimimos el mensaje de la promesa1
    return promesa2; // Retornamos promesa2
})
    .then((mensaje2) => {
    console.log(mensaje2); // Imprimimos el mensaje de la promesa2
    return promesa3; // Retornamos promesa3
})
    .then((mensaje3) => {
    console.log(mensaje3); // Imprimimos el mensaje de la promesa3
})
    .catch((err) => {
    console.log('Ha ocurrido un error: ', err.message); // Capturamos el error de promesa2
});
/*Cree una promesa cuyo resolve y reject dependan cada uno de una llamada asíncrona usando
setTimeout y así, su rechazo o resolución dependerá del proceso asíncrono que termine
primero. Implemente métodos .then y .catch. Si la promesa se rechaza, lance el error con new
Error(‘info error’) en el reject e imprima el stack del error en .catch, si se cumple, resuelva la
promesa con la cadena “promesa resuelta” e imprímalo en el .then*/
let promesaAsincrona = new Promise((resolve, reject) => {
    // Proceso que resolverá la promesa después de 2 segundos
    setTimeout(() => {
        resolve("promesa resuelta");
    }, 2000);
    // Proceso que rechazará la promesa después de 1 segundo
    setTimeout(() => {
        reject(new Error('info error'));
    }, 1000);
});
promesaAsincrona
    .then((mensaje) => {
    console.log(mensaje); // Si se resuelve, imprime "promesa resuelta"
})
    .catch((err) => {
    console.error('Ha ocurrido un error:', err.stack); // Si se rechaza, imprime el stack del error
});
/*Cree cuatro promesas donde cada una para resolverse dependa de un setTimeout, de tal
manera que cada promesa se resuelva en tiempos diferentes. Ejecute las cuatro promesas de
forma paralela, e imprima los cuatro resultados de resolución(recuerde que estos resultados van
en un arreglo, se sugiere use .foreach). No olvide .catch, qué pasa si una de las promesas falla al
estar las cuatro en paralelo ?. Haga una implementación de Promise.race con dos de las
promesas anteriores.*/
// Promesa 1: Se resuelve en 1 segundo
let promesa1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promesa 1 resuelta");
    }, 1000);
});
// Promesa 2: Se resuelve en 2 segundos
let promesa2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promesa 2 resuelta");
    }, 2000);
});
// Promesa 3: Se resuelve en 3 segundos
let promesa3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promesa 3 resuelta");
    }, 3000);
});
// Promesa 4: Se resuelve en 4 segundos
let promesa4 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promesa 4 resuelta");
    }, 4000);
});
// Ejecutamos las 4 promesas en paralelo usando Promise.all
Promise.all([promesa1, promesa2, promesa3, promesa4])
    .then((resultados) => {
    // Imprimimos los resultados con .forEach
    resultados.forEach((resultado) => {
        console.log(resultado);
    });
})
    .catch((err) => {
    // En caso de error en alguna promesa, se captura aquí
    console.error('Ha ocurrido un error:', err);
});
// Promise.race con promesa1 y promesa2
Promise.race([promesa1, promesa2])
    .then((resultado) => {
    console.log(`Ganó: ${resultado}`); // Imprime cuál promesa se resolvió primero
})
    .catch((err) => {
    console.error('Ha ocurrido un error en Promise.race:', err);
});
