function activo1() {
    let parrafo = document.getElementById('parrafo').value;
    let parrafoMinusc = parrafo.toLowerCase(); // Convertir todo a minúsculas
    let palabras = parrafoMinusc.split(/\s+/); // Dividir en palabra
    let palabrasUnicas = new Set();
    palabras.forEach(function (palabra) {
        palabrasUnicas.add(palabra);
    });
    let resultado = document.getElementById('resultado');
    resultado.textContent = palabrasUnicas.size;
}
document.getElementById('contar').addEventListener('click', activo1);
document.getElementById('limpiar').addEventListener('click', function () {
    document.getElementById('parrafo').value = ''; // Limpiar el textarea y resultado
    document.getElementById('resultado').textContent = ''; 
});

function activo3() {
    let cadena1 = document.getElementById('cadena1').value;
    let cadena2 = document.getElementById('cadena2').value;

    cadena1 = cadena1.replace(/\s/g, '').toLowerCase();
    cadena2 = cadena2.replace(/\s/g, '').toLowerCase();
    cadena1 = cadena1.split('').sort().join('');
    cadena2 = cadena2.split('').sort().join('');

    if (cadena1 === cadena2) {
        document.getElementById('res').textContent = 'Son anagramas.';
    } else {
        document.getElementById('res').textContent = 'No son anagramas.';
    }
}

document.getElementById('verificar').addEventListener('click', activo3);


function activo4() {
    let cadena = document.getElementById('cadena').value;
    let resultado = cadena.replace(/[aeiouAEIOU]/g, '*');

    document.getElementById('resul').textContent = 'Cadena reemplazada: ' + resultado;
}


document.getElementById('buscar').addEventListener('click', function() {
    let cadena = document.getElementById('cadena').value;
    let clave = document.getElementById('clave').value;

    if (cadena.includes(clave)) {
        document.getElementById('resta').textContent = 'La palabra clave aparece en la cadena.';
    } else {
        document.getElementById('resta').textContent = 'La palabra clave no aparece en la cadena.';
    }
});


function activo6() {
    let frase = document.getElementById('frase').value;
    let palabras = frase.split(/\s+/).filter(word => word !== '').length;
    document.getElementById('total').textContent = 'Número de palabras: ' + palabras;
}

function activo7() {
    let cadena = document.getElementById('cadena').value;
    let cadenaInvertida = cadena.split('').reverse().join('');
    document.getElementById('resal').textContent = 'Cadena invertida: ' + cadenaInvertida;
}



const frutas = ['manzana', 'banana', 'pera', 'uva', 'sandía', 'naranja'];

function verificarFruta() {
    let frutaIngresada = document.getElementById('fruta').value.toLowerCase();
    if (frutas.includes(frutaIngresada)) {
        document.getElementById('uno').textContent = 'Sí, la fruta está en la lista.';
    } else {
        document.getElementById('uno').textContent = 'No, la fruta no está en la lista.';
    }
}

function convertirCadena() {
    let cadena = document.getElementById('cadena').value;
    let cadenaMayusculas = cadena.toUpperCase();
    let cadenaMinusculas = cadena.toLowerCase();
    document.getElementById('dos').textContent = 'Mayúsculas: ' + cadenaMayusculas + '\nMinúsculas: ' + cadenaMinusculas;
}

function calcularLongitud() {
    let oracion = document.getElementById('oracion').value;
    let palabras = oracion.split(' ');
    let longitudPalabras = palabras.map(palabra => palabra.length);

    document.getElementById('tres').textContent = 'Longitud de palabras: ' + longitudPalabras.join(', ');
}

function duplicarArray() {
    const numeros = [1, 2, 3, 4, 5];
    const numerosDuplicados = numeros.map(numero => numero * 2);
    document.getElementById('cuatro').textContent = 'Array duplicado: ' + numerosDuplicados.join(', ');
}

function convertirPalabras() {
    const palabras = ["Hola", "Mundo", "Programación"];
    const palabrasModificadas = palabras.map(palabra => {
        return palabra.split('').map(letra => {
            if (letra === letra.toLowerCase()) {
                return letra.toUpperCase();
            } else {
                return letra.toLowerCase();
            }
        }).join('');
    });
    document.getElementById('six').textContent = 'Palabras modificadas: ' + palabrasModificadas.join(', ');
}