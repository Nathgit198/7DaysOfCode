let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let comida = "";
let categoria = "";

let addMais = "sim";
while(addMais != "não") {
    addMais = prompt("Você deseja adicionar uma comida na lista de compras? Por favor responda com 'sim' ou 'não'.");
    while (addMais != "sim" && addMais != "não") {
        alert("Operação não reconhecida!");
        addMais = prompt("Você deseja adicionar uma comida na lista de compras? Por favor responda com 'sim' ou 'não'.");

    }

    if (addMais === "não") {
        break;
    }

    comida = prompt("Qual comida você deseja inserir?");
    categoria = prompt("Em qual categoria essa comida se encaixa: 'frutas', 'laticínios', 'doces' ou 'congelados' ")
    if(categoria === "frutas") {
        frutas.push(comida);
    } else if (categoria === "laticínios") {
        laticinios.push(comida);
    } else if (categoria === "doces") {
        doces.push(comida);
    } else if (categoria === "congelados") {
        congelados.push(comida);
    } else {
        alert("Essa categoria não foi pré-definida.");
    }
}
alert(`Lista de compras:\n Frutas: ${frutas}\n Laticínios: ${laticinios}\n Doces: ${doces}\n Congelados: ${congelados}`);