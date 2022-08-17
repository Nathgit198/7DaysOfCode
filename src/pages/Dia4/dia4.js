const numAdivinhar = 5;
let chute = "";
let acertou = false;

for (let contador = 0; contador < 3; contador++) {
    chute = prompt("Tente adivinhar o número de 0 a 10")
    if (chute == numAdivinhar) {
        alert(`Parabéns, você acertou! O número era ${numAdivinhar}`)
        acertou = true
        break;
    }
    alert("Errado!");
}
if (!acertou) {
    alert(`Infelizmente, você não acertou. O número era ${numAdivinhar}!`)
}