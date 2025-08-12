//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (nome) {
        amigos.push(nome);
        document.getElementById("listaAmigos").innerHTML = amigos.join(", ");
        input.value = "";
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 nomes!");
        return;
    }

    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById("resultado").innerHTML = `🎉 O amigo secreto é: <strong>${sorteado}</strong>`;
}