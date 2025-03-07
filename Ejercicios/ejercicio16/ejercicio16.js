const datosUsuarios = async () => {
    const datos = await fetch('../json/ejercicio16.json')
    const resultados = await datos.json();
    return resultados;
}

fetch('../json/ejercicio16.json').then((datos) => {
    datos.json().then((datosUsuarios) => {
        for (let i = 0; i < datosUsuarios.length; i++) {
            if (datosUsuarios[i].nombre.startsWith('A')) {                
                console.log(datosUsuarios[i].nombre);
            }
        }
    })
});