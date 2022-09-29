let x = "";
console.log(x);
x = "Oi";

function imprimeTexto (texto) {
    console.log(texto)
}

function soma(){
    return 2 + 2;
}

imprimeTexto(x)
imprimeTexto(`o valor da função soma é ${soma()}`);

