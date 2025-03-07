let contador = 0;

setTimeout(() => alert(contador), 100);

for (let k = 0; k < 100000000; k++) {
  contador++;
}