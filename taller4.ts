/*Cree una función que reciba como argumento un número y retorne el cuadrado de éste cómo una
promesa usando Async para ello. Luego, llame a la función y trate de imprimir su valor de retorno. ¿Cuál
es el resultado de la impresión? ¿un valor numérico ? ¿una promesa ?*/


// Función que recibe un número y retorna el cuadrado como una promesa
const calcularCuadrado = async (numero: number): Promise<number> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(numero * numero);  // Retorna el cuadrado del número
        }, 1000);  // Simulando una operación asíncrona
    });
};

// Llamamos a la función y usamos async/await para imprimir su valor de retorno
const mostrarCuadrado = async () => {
    try {
        const resultado = await calcularCuadrado(5);  // Cambia el número según lo desees
        console.log(`El cuadrado es: ${resultado}`);  // Imprime el resultado
    } catch (error) {
        console.error('Error:', error);
    }
};

// Ejecutar la función para mostrar el cuadrado
mostrarCuadrado();


//el resultado es un valor numerico




/*Cree una función llamada “resultado” que retorne una promesa usando “return new Promise”, de tal
manera que la promesa en su bloque de instrucciones implemente setTimeout demorandose seis
segundos para resolverse con valor 8. Luego, llame a la función e imprima su resultado, ¿qué resultado
obtiene? ¿una promesa?, ¿ un entero ?*/

// Función que retorna una promesa que se resuelve con el valor 8 después de 6 segundos
const resultado1 = () => {
    return new Promise<number>((resolve) => {
        setTimeout(() => {
            resolve(8);  // Resolvemos la promesa con el valor 8
        }, 6000);  // 6 segundos
    });
};

// Llamamos a la función y usamos async/await para imprimir su resultado
const mostrarResultado = async () => {
    try {
        const valor = await resultado1();  // Esperamos la resolución de la promesa
        console.log(`El resultado es: ${valor}`);  // Imprimimos el resultado
    } catch (error) {
        console.error('Error:', error);
    }
};

// Ejecutar la función para mostrar el resultado
mostrarResultado();

//el resultado es un numero entero



/*Cree una función llamada “cuadradoAsincrono” que llame en su bloque de instrucciones a la función
“resultado” de tal manera que la ejecución se detenga hasta obtener el valor retornado por “resultado”,
luego, eleve tal valor al cuadrado y este sea impreso. Use Async - Await. ¿ Qué imprimió ? ¿una
promesa?, ¿ un entero ?*/

// Función que retorna una promesa que se resuelve con el valor 8 después de 6 segundos
const resultado2 = () => {
    return new Promise<number>((resolve) => {
        setTimeout(() => {
            resolve(8);  // Resolvemos la promesa con el valor 8
        }, 6000);  // 6 segundos
    });
};

// Función que llama a "resultado", espera el valor y eleva ese valor al cuadrado
const cuadradoAsincrono = async () => {
    try {
        const valor = await resultado2();  // Espera el resultado de la promesa
        const cuadrado = valor * valor;    // Eleva el valor al cuadrado
        console.log(`El cuadrado del resultado es: ${cuadrado}`);  // Imprime el cuadrado
    } catch (error) {
        console.error('Error:', error);
    }
};

// Ejecutar la función para mostrar el cuadrado
cuadradoAsincrono();


//el resultado es un numero entero 



/*a) ¿Qué cláusula usamos para que una función retorne una promesa sin crearla explícitamente
dentro de la función ?*/
//R/: Usamos asyinc


//b) Si necesitamos capturar el valor de una promesa, ¿ qué cláusula usamos ?
//R/: Usamos await


//c) ¿Cuál es la condición para poder usar la cláusula await ?
//R/: Se deb estar dentro de una funcion async para utilizar await





//POO

/*Cree e instancie una clase coche con un método no estático y otro estático, dos propiedades, una pública
y una privada, ambas deben ser pasadas al constructor.*/

class Coche {
    // Propiedades
    public marca: string; // Propiedad pública
    private modelo: string; // Propiedad privada

    // Constructor
    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
    }

    // Método no estático
    public mostrarInformacion(): void {
        console.log(`Coche: ${this.marca} ${this.modelo}`);
    }

    // Método estático
    public static crearCoche(marca: string, modelo: string): Coche {
        return new Coche(marca, modelo); // Crea y retorna una nueva instancia de Coche
    }
}

// Instanciar la clase Coche
const miCoche = Coche.crearCoche("Toyota", "Corolla"); // Usamos el método estático para crear una instancia
miCoche.mostrarInformacion(); // Llamamos al método no estático para mostrar información



/*Cree e instancie una clase robot con dos métodos no estáticos y dos estáticos, cuatro propiedades, dos
públicas y dos privadas, dos deben ser pasadas al constructor, las otras dos, deben ser inicializadas
dentro de la clase.*/


class Robot {
    // Propiedades
    public nombre: string;      // Propiedad pública
    public version: number;     // Propiedad pública
    private estado: string;      // Propiedad privada
    private bateria: number;     // Propiedad privada

    // Constructor
    constructor(nombre: string, version: number) {
        this.nombre = nombre;
        this.version = version;
        this.estado = "apagado"; // Inicializada dentro de la clase
        this.bateria = 100;      // Inicializada dentro de la clase
    }

    // Método no estático para encender el robot
    public encender(): void {
        if (this.bateria > 0) {
            this.estado = "encendido";
            console.log(`${this.nombre} está encendido.`);
        } else {
            console.log(`${this.nombre} no puede encenderse. Batería baja.`);
        }
    }

    // Método no estático para apagar el robot
    public apagar(): void {
        this.estado = "apagado";
        console.log(`${this.nombre} está apagado.`);
    }

    // Método estático para crear un robot básico
    public static crearRobotBasico(nombre: string): Robot {
        return new Robot(nombre, 1.0); // Crea un nuevo robot con versión 1.0
    }

    // Método estático para crear un robot avanzado
    public static crearRobotAvanzado(nombre: string, version: number): Robot {
        return new Robot(nombre, version); // Crea un nuevo robot con la versión dada
    }
}

// Instanciar la clase Robot
const robot1 = Robot.crearRobotBasico("Robo1"); // Usamos el método estático para crear un robot básico
robot1.encender(); // Llamamos al método no estático para encender el robot
robot1.apagar();   // Llamamos al método no estático para apagar el robot

const robot2 = Robot.crearRobotAvanzado("Robo2", 2.0); // Usamos el método estático para crear un robot avanzado
robot2.encender(); // Llamamos al método no estático para encender el robot



/*Cree e instancie una clase PC con dos métodos no estáticos y dos estáticos, cuatro propiedades, dos
públicas y dos privadas, todas deben ser pasadas al constructor.*/


class PC {
    // Propiedades
    public marca: string;     // Propiedad pública
    public modelo: string;    // Propiedad pública
    private ram: number;      // Propiedad privada
    private almacenamiento: number; // Propiedad privada

    // Constructor
    constructor(marca: string, modelo: string, ram: number, almacenamiento: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ram = ram;
        this.almacenamiento = almacenamiento;
    }

    // Método no estático para mostrar la información de la PC
    public mostrarInfo(): void {
        console.log(`PC: ${this.marca} ${this.modelo}`);
        console.log(`RAM: ${this.ram} GB`);
        console.log(`Almacenamiento: ${this.almacenamiento} GB`);
    }

    // Método no estático para actualizar la RAM
    public actualizarRAM(nuevaRAM: number): void {
        this.ram = nuevaRAM;
        console.log(`RAM actualizada a: ${this.ram} GB`);
    }

    // Método estático para crear una PC de gama baja
    public static crearPCGamaBaja(marca: string, modelo: string): PC {
        return new PC(marca, modelo, 4, 500); // Crea una PC con 4GB de RAM y 500GB de almacenamiento
    }

    // Método estático para crear una PC de gama alta
    public static crearPCGamaAlta(marca: string, modelo: string, ram: number, almacenamiento: number): PC {
        return new PC(marca, modelo, ram, almacenamiento); // Crea una PC con las especificaciones dadas
    }
}

// Instanciar la clase PC
const pcBaja = PC.crearPCGamaBaja("HP", "Pavilion"); // Usamos el método estático para crear una PC de gama baja
pcBaja.mostrarInfo(); // Llamamos al método no estático para mostrar la información

const pcAlta = PC.crearPCGamaAlta("Dell", "XPS", 16, 1000); // Usamos el método estático para crear una PC de gama alta
pcAlta.mostrarInfo(); // Llamamos al método no estático para mostrar la información
pcAlta.actualizarRAM(32); // Llamamos al método no estático para actualizar la RAM
