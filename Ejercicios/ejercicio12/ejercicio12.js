async function promesa() {
    let respuesta = await new Promise((resolve) => {
        setTimeout(() => resolve("Operacion completada"),1000);
    })
    alert(respuesta);
}
promesa();