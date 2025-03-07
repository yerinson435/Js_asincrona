let lastArray = [];

const condicion = palabra => {
  return palabra.toUpperCase();
}

const filtrar = (arreglo, callback) => {
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i].length > 4) {
      lastArray.push(callback(arreglo[i]));
      console.log(arreglo[i]);
    }
  }
  console.log(lastArray);

}

filtrar(["yerinson", "toñito", "colombia", "terremoto"], condicion);