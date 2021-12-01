// ----- TRAER ELEMENTOS DEL DOM

// ----- El modelo de objeto de documento (DOM) es una interfaz de programación para los documentos HTML 
// y XML. Facilita una representación estructurada del documento y define de qué manera los programas pueden 
// acceder, al fin de modificar, tanto su estructura, estilo y contenido. El DOM da una representación del 
// documento como un grupo de nodos y objetos estructurados que tienen propiedades y métodos.

// ----- Const : Esta declaración crea una constante cuyo alcance puede ser global o local para el bloque 
// en el que se declara. Es necesario iniciar la constante, es decir, se debe especificar 
// su valor en la misma sentencia en la que se declara, lo que tiene sentido, dado que no se 
// puede cambiar posteriormente. 

const number = 0
// number = 1 // Arroja error

// ----- La declaración de una constante crea una referencia de sólo lectura. No significa que el valor 
// que tiene sea inmutable, sino que el identificador de variable no puede ser reasignado, por lo 
// tanto, en el caso de que la asignación a la constante sea un objeto, el objeto sí que puede ser 
// alterado. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/const

// ----- var: La sentencia var declara una variable, opcionalmente inicializándola con un valor.

var number2 = 0
number2 = 1 // No arroja error

// ----- let: La instrucción let declara una variable de alcance local con ámbito de bloque(block scope), 
// la cual, opcionalmente, puede ser inicializada con algún valor.

let number3 = 3
console.log('numero 3', number3)

if (true) {
    var number4 = 4 // alcance global
    let number5 = 5 // alcance local
    console.log('numero 4 dentro de bloque', number4)
    console.log('numero 5 dentro de bloque', number5)
}

console.log('numero 4 fuera de bloque', number4)
// console.log('number 5 fuera de bloque', number5) // Aparecera error

// ---- TIPOS DE DATOS

const text = 'Hola'
console.log(text, typeof text) // string

const numberAsText = '10'
console.log(numberAsText, typeof numberAsText) // string

const numberInt = 1
console.log(numberInt, typeof numberInt) // number

const numberFloat = 1.1
console.log(numberFloat, typeof numberFloat) // number

// Los arrays son objetos similares a una lista cuyo prototipo proporciona métodos para efectuar 
// operaciones de recorrido y de mutación. Tanto la longitud como el tipo de los elementos de un array 
// son variables.

const array = [-123, 2, 'texto', '4', {
        'year': 2021
    },
    [0, 0, 0.5]
] // Se accede por un índice, que inicia desde 0
console.log(array, typeof array) // object

for (var i = 0; i < array.length; i++) {
    console.log('El valor en el índice ' + i + ' del array es: ', array[i])
}

// ---- Foreach: Para cada elemento del array, realizo una tarea, el avanza solo por el objeto

array.forEach(element => {

    console.log('ELEMENTO ACTUAL: ', element)

    // Condicionales: validan si una condicion es verdadera o falsa

    if (element == 'texto' || element == '4') { // || operador lógico OR, una de las condiciones debe ser verdadera
        console.log('Encontramos los datos tipo string!', element)

    } else if (typeof element == 'number' && element > 0) { // && operador lógico AND -> Ambas condiciones deben cumplirse
        console.log('Numero mayor que 0 encontrado', element)

    } else {
        console.log('No se encontró ningún dato relevante')
    }

})

// ---- JavaScript está diseñado en un paradigma simple basado en objetos. Un objeto es una colección de 
// propiedades, y una propiedad es una asociación entre un nombre (o clave) y un valor.

// ejemplo: 

const beam = {
    'width': 0.3,
    'height': 0.5,
    'material': {
        'fpc': {
            'value': 28,
            'unit': 'MPa'
        },
    },
    'coordinates': [
        [0, 0, 0],
        [1, 0, 0.5]
    ] // [[xi, yi, zi], [xj, yj, zj]]
}

// Para obtener el valor de la resistencia de la viga
// var resistanceValue = beam['material']['fpc']['value']
var resistanceValue = beam.material.fpc.value

console.log('fpc de la viga es: ', resistanceValue)

// Para acceder al punto zj de la viga
var zj = beam['coordinates'][1][2]

console.log('La coordenada zj de la viga es: ', zj)

// Para agregar o reemplazar un valor a un objeto
// Vamos a agregar un nombre a la viga

beam['name'] = 'Viga 1 / eje C' // nuevo valor
beam['width'] = 0.4 // valor actualizado

// Iterar sobre un objeto

Object.keys(beam).forEach(key => {
    console.log('iterando sobre el objeto con .keys: ', key, beam[key])
})

Object.values(beam).forEach(v => {
    console.log('iterando sobre el objeto con .values: ', v)
})

console.log('viga modificada: ', beam)

console.log(beam, typeof beam) // object

// ---- OBTENIENDO ELEMENTOS DEL DOM
// ----- Document.getElementById devuelve una referencia al elemento por su ID

const myInput = document.getElementById('myInput');
const result = document.getElementById('result');

// ----- addEventListener() Registra un evento a un objeto en específico. El Objeto especifico puede ser 
// un simple elemento en un archivo

myInput.addEventListener('input', (e) => {
    console.log(e.target.value);
})

myInput.addEventListener('input', calculateSquare)

function calculateSquare(e) {
    console.log(e)
    result.textContent = e.target.value * e.target.value;
}

// Una función en JavaScript es similar a un procedimiento — un conjunto de instrucciones que realiza 
// una tarea o calcula un valor, pero para que un procedimiento califique como función, debe tomar alguna 
// entrada y devolver una salida donde hay alguna relación obvia entre la entrada y la salida.

function add(a, b) {
    console.log(a + b)
    return a + b
}

const resultAdd = add(1, 2) // 3
console.log('resultado: ', resultAdd)