const verificarNumero = numero => numero > 13;

const localizar = (lista, condicion) => {
  for (let j = 0; j < lista.length; j++) {
    if (condicion(lista[j])) {
      return true;
    }
  }
  return undefined;
};

console.log(localizar([3, 15, 9, 2, 7], verificarNumero));