
let promesa = new Promise((resolve,reject) => {
    setTimeout(() => {
        reject(new Error ("Promese rechazada"));
    }, 2000);
});

promesa.catch((console.error));