const esPar = numero => numero % 2 === 0;

const verificarPar = (lista, condicion) => {
  for (let j = 0; j < lista.length; j++) {
    if (condicion(lista[j])) return true;
  }
  return false;
};

console.log(verificarPar([7, 9, 11, 13, 15], esPar));