
let i = 0;
setTimeout(() => alert(i), 100); 

for (let j = 0; j < 100000000; j++) {
  i++;
}

alert("El valor que mostrará alert(i) será 100000000, ya que el bucle for bloquea el hilo principal" +
" y la función dentro de setTimeout solo podrá ejecutarse después de que el bucle haya finalizado.");