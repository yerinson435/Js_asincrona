const resultado = [];

const transformar = (valor) => valor * 5;

const procesarArray = (numeros, transformar) => {
  for (let j = 0; j < numeros.length; j++) {
    if (numeros[j] % 2 === 0) {
      resultado.push(transformar(numeros[j]));
    }
  }
  console.log(resultado);
};

procesarArray([1, 2, 3, 4, 5, 6, 7, 8], transformar);
