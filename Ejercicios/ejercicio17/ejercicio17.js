const cargarUsuarios = async () => {
    try {
        const respuesta = await fetch('../json/ejercicio17.json');

        if (!respuesta.ok) {
            throw new Error('No fue posible cargar los datos del JSON');
        }

        const usuarios = await respuesta.json();
        usuarios.forEach(usuario => {
            console.log(`Nombre: ${usuario.nombre}, Edad: ${usuario.edad}, Email: ${usuario.email}`);
        });
    } catch (error) {
        console.error('Hubo un problema al obtener o procesar la información:', error);
    }
};

cargarUsuarios();
