function operacion(numero, tiempo) {
    return new Promise(resolver => {
        setTimeout(() => {
            resolver(numero);
        }, tiempo);
    });
}

operacion(45, 1000)
    .then(valor1 => {
        console.log(`Numero 1: ${valor1}`);
        return operacion(20, 1000)
    .then(valor2 => {
        console.log(`Numero 2: ${valor2}`);
        return operacion(15, 1000)
    .then(valor3 => {
        console.log(`Numero 3: ${valor3}`);
        const total = valor1 + valor2 + valor3;
        console.log(`el valor es: ${total}`);
        });
    });
});
