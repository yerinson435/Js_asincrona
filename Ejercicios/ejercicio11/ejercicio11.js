const promesa =function () {
    return new Promise((resolve) => {
       setTimeout(() => {
        alert("Promisa resuelta");
        resolve();
       }, 3000); 
    });
}
promesa();