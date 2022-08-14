const area = window.prompt("Qual area você irá seguir - Front-end ou Back-end?");
let linguagem = "";

if (area === "Front-end" || area === "front-end" || area === "front end") {
    linguagem = window.prompt("Você quer aprender React ou aprender Vue");
} else if (area == "Back-end" || area === "back-end" || area === "back end") {
    linguagem = window.prompt("Você quer aprender C# ou Java?");
} else {
    alert('Você deverá escolher entre Front-end ou Back-end, tente novamente!')
}

const especializarOuFullstack = window.prompt("Digite 1 para seguir se especializando na área escolhida ou 2 para seguir se desenvolvendo para se tornar Fullstack");
if (especializarOuFullstack == 1) {
    alert(`Continue se especializando em ${linguagem} para dominar a área de ${area}!`)
} else if (especializarOuFullstack == 2) {
    alert(`Chegou a hora de começar a aprender outras linguagens além de ${linguagem} se você quer se tornar Fullstack!`);
} else {
    alert("Você não inseriu um valor válido!");
}

let mensagem = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.")
while (mensagem === "ok" || mensagem === "Ok") {
    let novaTecnologia = prompt("Qual?")
    alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`);
    mensagem = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
}