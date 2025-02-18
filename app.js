let amigos = [];
let digitenome = "Digite o nome dos seus amigos";
let nomeRepetido = "Esse nome já está na lista, insira um nome diferente ou com sobrenome.";
let nomeBranco = "Insira um nome, não deixe em branco!";

function limparCampo(tag) {
    let limpar = document.querySelector(tag);
    limpar.value = "";
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos"); 
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    amigos.forEach(function(amigo) {
        let novoItem = document.createElement("li");
        novoItem.textContent = amigo;
        lista.appendChild(novoItem);
    });
}

function adicionarAmigo() {
    let amigo = document.querySelector("input").value.trim(); // Remove espaços extras
    let estaNaLista = amigos.includes(amigo);

    if (estaNaLista) {
        alert(nomeRepetido);
    } else if (amigo === "") {
        alert(nomeBranco);
    } else {
        amigos.push(amigo); // Adiciona o nome à lista
        atualizarLista(); // Atualiza a lista no HTML
    }

    limparCampo("input"); // Limpa o campo após adicionar
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista está vazia! Adicione nomes antes de sortear.");
        return;
    }

    let nomeEscolhido = amigos[Math.floor(Math.random() * amigos.length)];
    alert("O amigo secreto sorteado é: " + nomeEscolhido);
}
