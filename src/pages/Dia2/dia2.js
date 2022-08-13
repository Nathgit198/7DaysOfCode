const nome = document.getElementById("nome");
const idade = document.getElementById("idade");
const linguagem = document.getElementById("linguagem");

const btn = document.getElementById("btn");
btn.addEventListener("click", function(event) {
    event.preventDefault()
    const erro = document.querySelector(".erro");
    if (nome.value == "" || idade.value == "" || linguagem.value == "") {
        erro.innerHTML = "<p>Você ainda não digitou seu nome, idade e linguagem</p>"
        return;  
    } 
    window.alert(`Olá ${nome.value}, você tem ${idade.value} anos e já está aprendendo ${linguagem.value}! `)
})

