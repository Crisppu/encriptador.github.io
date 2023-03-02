let textoArea1 = document.querySelector('[data-textAreaEncriptar]');
const botonEncriptar = document.querySelector('[data-botonEncriptar]');
const textoArea2 = document.querySelector('[data-textAreaResultado]');
const botonCopiar = document.querySelector('[data-botonCopiar]');

const botonDesencriptar = document.querySelector('[data-botonDesencriptar]');


var arregloNuevo;
botonEncriptar.addEventListener('click', function () {

    const textoIngresado = textoArea1.value.toLowerCase();
    let verificacion = soloLetras(textoIngresado);

    var vocales = ['a', 'e', 'i', 'o', 'u'];
    let arregloIngresado = textoIngresado.split('');


    for (let i = 0; i <= arregloIngresado.length; i++) {
        for (let a = 0; a <= vocales.length; a++) {
            if (arregloIngresado[a] == vocales[i] && verificacion === true) {
                var cambiarLetra = [];

                for (let j = 0; j <= arregloIngresado.length; j++) {
                    var texto = arregloIngresado[j].replace(/^a$/, "ai")
                        .replace(/^e$/, "enter")
                        .replace(/^i$/, "imes")
                        .replace(/^o$/, "ober")
                        .replace(/^u$/, "ufat");
                    cambiarLetra.push(texto);
                    cambiarLetra.slice();
                    const joined = cambiarLetra.join("");
                    textoArea2.innerHTML = joined;
                    textoArea1.value = "";

                }

            }
        }
    }

});


botonDesencriptar.addEventListener('click', function () {
    const textoIngresado = textoArea1.value.toLowerCase();
    let verificacion = soloLetras(textoIngresado);
    let arregloIngresado = textoIngresado.split(' ');

    var cambiarLetra = [];
    if (verificacion) {
        for (let j = 0; j <= arregloIngresado.length; j++) {
            var texto = arregloIngresado[j].replace(/ai/igm, "a")
                .replace(/enter/igm, "e")
                .replace(/imes/igm, "i")
                .replace(/ober/igm, "o")
                .replace(/ufat/igm, "u");
            cambiarLetra.push(texto);
            const joined = cambiarLetra.join(" ");
            textoArea2.innerHTML = joined;
            textoArea1.value = "";
        }
    }
});





function soloLetras(cadena) {
    // Expresión regular que valida si la cadena contiene solo letras
    var regex = /^[a-zA-Z\s]*$/;
    var validacion = regex.test(cadena);
    if (validacion == false) {
        alert('ingresar solo letras :)');
        textoArea1.value = "";
        textoArea2.innerHTML = "";
    }
    return validacion;
}


botonCopiar.addEventListener('click', function () {
    const copiado = textoArea2.value;
    navigator.clipboard.writeText(copiado);
    textoArea2.innerHTML = "";
});


