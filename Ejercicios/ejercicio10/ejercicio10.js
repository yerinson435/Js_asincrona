
function delay(ms) {
    return new Promise (function (resolve) {
        setTimeout(resolve,ms);
    })
}

delay(3000).then(() => alert("se ejecuta despues de 3 segundos"));