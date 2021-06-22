import cipher from './cipher.js';

const botao1 = document.getElementById("botao1")
const botao2 = document.getElementById("botao2")
const campoEntrada = document.getElementById("digiteAqui");
const numDesloc = document.getElementById("desloc");
const resultado = document.getElementById("textocifrado");

botao1.addEventListener("click", function () {
  resultado.value = cipher.encode(parseInt(numDesloc.value), campoEntrada.value);
}, false);

botao2.addEventListener("click", function () {
  resultado.value = cipher.decode(parseInt(numDesloc.value), campoEntrada.value);
}, false);