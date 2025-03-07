const obtenerDatos = async () => {
    const respuesta = await fetch('../json/ejercicio15.json');
    const informacion = await respuesta.json();
    return informacion;
};

obtenerDatos().then(usuarios => {
    console.log(usuarios);
});

fetch('../json/ejercicio15.json')
    .then(respuesta => respuesta.json())
    .then(infoUsuarios => {
        console.log(infoUsuarios);
    });
