// 
//  Imprime números en la consola cada segundo desde 'desde' hasta 'hasta'.
//  Usa setInterval para repetir la ejecución en intervalos regulares.
//  
// const imprimirNumerosInterval = (desde, hasta) => {
//     let numero = desde;
  
//     // Inicia un intervalo que se ejecuta cada 1000ms (1s)
//     const intervalo = setInterval(() => {
//       console.log(numero);
  
//       // Si llegamos al número final, detenemos el intervalo
//       if (numero === hasta) {
//         clearInterval(intervalo);
//       }
  
//       numero++; // Incrementamos el número en cada iteración
//     }, 1000);
//   };
  
//   // Llamamos la función con valores de prueba
//   imprimirNumerosInterval(1, 5);



// 
//  Imprime números en la consola cada segundo desde 'desde' hasta 'hasta'.
//  Usa setTimeout de manera recursiva para controlar el intervalo manualmente.
//  
// const imprimirNumerosTimeout = (desde, hasta) => {
//     const imprimir = (numero) => {
//       console.log(numero);
  
//       // Si el número actual es menor que el límite, llamamos a la función otra vez después de 1s
//       if (numero < hasta) {
//         setTimeout(() => imprimir(numero + 1), 1000);
//       }
//     };
  
//     imprimir(desde); // Llamamos a la función con el número inicial
//   };
  
//   // Llamamos la función con valores de prueba
//   imprimirNumerosTimeout(1, 5);


const mostrarNumero = (num) => {
    if (num !== null) {
      console.log(`Número: ${num}`);
    } else {
      console.log("Finalizado");
    }
  };
  
  const generarNumeros = (desde, hasta, callback) => {
    if (desde <= hasta) {
      callback(desde);
      setTimeout(() => generarNumeros(desde + 1, hasta, callback), 1000);
    } else {
      callback(null);
    }
  };
  
  generarNumeros(1, 5, mostrarNumero);
  
  