
let i = 0;
setTimeout(() => alert(i), 100); // ?

for (let j = 0; j < 100000000; j++) {
  i++;
}

alert("El resultado motrado por alert(i) sera de 100000000 ya que el for bloquea el hilo principal" +
  " y el setTimeout solo se ejecutara después de que el bucle termine");