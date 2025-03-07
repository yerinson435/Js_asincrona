const verificar = num => num > 5;

const evaluarArray = (lista, verificar) => {
  for (let j = 0; j < lista.length; j++) {
    if (!verificar(lista[j])) {
      return false;
    }
  }
  return true;
};

console.log(evaluarArray([6, 8, 10, 20, 50], verificar));
