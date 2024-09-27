textoInicial();

function calculaIMC(){
    let altura = parseFloat(document.getElementById('edtAltura').value);
    let peso = parseFloat(document.getElementById('edtPeso').value);
    let imc = (peso / (altura*altura)); 
    let resultado = `O Seu IMC é de ${imc}`;
    exibirTextoNaTela('p', resultado);
    document.getElementById('reiniciar').removeAttribute('disabled');
}

function refresh(){
    textoInicial();
    let altura = parseFloat(document.getElementById('edtAltura'));
    let peso = parseFloat(document.getElementById('edtPeso'));
    altura.value = '';
    peso.value = '';
}

function textoInicial(){
    exibirTextoNaTela('h1', 'Calculadora de índice da massa corporal.');
    exibirTextoNaTela('p', 'Digite sua altura e peso para calcular.');
}

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}