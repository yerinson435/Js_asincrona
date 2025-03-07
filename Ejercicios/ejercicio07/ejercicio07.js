const esMayorDiez = numero => numero > 10;

const buscarMayor = (lista, condicion) => {
  for (let j = 0; j < lista.length; j++) {
    if (condicion(lista[j])) return true;
  }
  return undefined;
};

console.log(buscarMayor([3, 7, 9, 2, 6], esMayorDiez));
