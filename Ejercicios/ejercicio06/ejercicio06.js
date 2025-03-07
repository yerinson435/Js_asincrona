let numeros = [3, 7, 10, 21, 33];

const existe = function (numeros, verificacion) {
  for (let i = 0; i < numeros.length; i++) {
    if (verificacion(numeros[i])) {
      return true;
    }
  }
  return false;
}

function esPar(valor) {
  return valor % 2 === 0;
}

console.log(existe(numeros, esPar));
