const texto = document.getElementById('texto');
const encriptar = document.getElementById('encriptar');
const desencriptar = document.getElementById('desencriptar');
const resultado = document.getElementById('resultado');

encriptar.addEventListener('click', () => {
    const textoEncriptado = encriptarTexto(texto.value);
    resultado.innerText = textoEncriptado;
});

desencriptar.addEventListener('click', () => {
    const textoDesencriptado = desencriptarTexto(resultado.innerText);
    resultado.innerText = textoDesencriptado;
});

function encriptarTexto(texto) {
    let textoEncriptado = '';
    for (let i = 0; i < texto.length; i++) {
        const charCode = texto.charCodeAt(i);
        textoEncriptado += String.fromCharCode(charCode + 3);
    }
    return textoEncriptado;
}

function desencriptarTexto(texto) {
    let textoDesencriptado = '';
    for (let i = 0; i < texto.length; i++) {
        const charCode = texto.charCodeAt(i);
        textoDesencriptado += String.fromCharCode(charCode - 3);
    }
    return textoDesencriptado;
}