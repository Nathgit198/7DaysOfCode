const pergunta = prompt("Escolha qual o tipo de operação você irá realizar: 1-soma, 2-subtração, 3-multiplicação, 4-divisão ou 5-sair");

switch(pergunta) {
    case "1":
        soma();
        break;
    case "2":
        subtracao();
        break;
    case "3":
        multiplicacao();
        break;
    case "4":
        divisao();
        break;
    case "5":
        despedida();
        break;
    default:
        alert(`Não foi possível efetuar a operação`);
}
function soma() {
    let numero1 = prompt("Digite um número");
    let numero2 = prompt("Digite um outro número");
    alert(`O resultado da soma é: ${parseInt(numero1) + parseInt(numero2)}`);
    despedida();
}
function subtracao() {
    let numero1 = prompt("Digite um número");
    let numero2 = prompt("Digite um outro número");
    alert(`O resultado da subtração é: ${parseInt(numero1) - parseInt(numero2)}`);
    despedida();
}
function multiplicacao() {
    let numero1 = prompt("Digite um número");
    let numero2 = prompt("Digite um outro número");
    alert(`O resultado da multiplicação é: ${parseInt(numero1) * parseInt(numero2)}`);
    despedida();
}
function divisao() {
    let numero1 = prompt("Digite um número");
    let numero2 = prompt("Digite um outro número");
    alert(`O resultado da divisão é: ${parseInt(numero1) / parseInt(numero2)}`);
    despedida();
}
function despedida() {
    alert(`Até a próxima`);
}