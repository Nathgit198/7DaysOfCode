let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let comida = "";
let categoria = "";
let remover = "";

let addMais = "sim";
while(addMais != "não") {

    if (frutas.length === 0 && laticinios.length === 0 && congelados.length === 0 && doces.length === 0) {
        addMais = prompt("Você deseja adicionar uma comida na lista de compras? Por favor responda com 'sim' ou 'não'.");
    } else {
        addMais = prompt("Você deseja adicionar uma comida na lista de compras? Por favor responda com 'sim', 'não' ou 'remover'.");
    }

    while (addMais != "sim" && addMais != "não" && addMais != "remover") {
        alert("Operação não reconhecida!");
        addMais = prompt("Você deseja adicionar uma comida na lista de compras? Por favor responda com 'sim' ou 'não'.");

    }

    if (addMais === "não") {
        break;
    }

    if (addMais === "sim") { 
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
    } else if (addMais === "remover") {
        if (frutas.length === 0 && laticinios.length === 0 && congelados.length === 0 && doces.length === 0) {
            alert(`A lista está vazia`);
        } else {
            remover = prompt(`Lista de compras:\n Frutas: ${frutas}\n Laticínios: ${laticinios}\n Doces: ${doces}\n Congelados: ${congelados}\n\n Qual produto você deseja remover?`)
            if (frutas.indexOf(remover) != -1) {
                frutas.splice(frutas.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`);
            } else if (laticinios.indexOf(remover) != -1) {
                laticinios.splice(laticinios.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`);
            } else if (doces.indexOf(remover) != -1) {
                doces.splice(doces.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`);
            } else if (congelados.indexOf(remover) != -1) {
                congelados.splice(congelados.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`);
            } else {
                alert(`Não foi possível encontrar o item dentro da lista`);
            }
        }
    }
}
alert(`Lista de compras:\n Frutas: ${frutas}\n Laticínios: ${laticinios}\n Doces: ${doces}\n Congelados: ${congelados}`);