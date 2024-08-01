
function trocarImagem(event) {
    var imgElement = document.getElementById('kaiser-ft');
    var conteudoCard = document.querySelector('.conteudo-card3');
    var clickX = event.clientX - imgElement.getBoundingClientRect().left; // Posição X do clique em relação à imagem

    if (clickX < imgElement.offsetWidth / 3) {
        imgElement.style.backgroundImage = "url('7.jpg')"; // Clique à esquerda
        imgElement.style.backgroundSize = "120%";
        conteudoCard.textContent = "(Segredo na Floresta)";
    } else if (clickX < imgElement.offsetWidth * 2 / 3) {
        imgElement.style.backgroundImage = "url('9.gif')"; // Clique à direita
        imgElement.style.backgroundSize = "auto 420px";
        conteudoCard.textContent = "(Desconjuração Final)";
    } else {
        imgElement.style.backgroundImage = "url('8.png')"; // Clique no meio
        imgElement.style.backgroundSize = "117%"; // Tamanho menor
        conteudoCard.textContent = "(Desconjuração Início)";
    }
}

function trocarImagem2(event) {
    var imgElement = document.getElementById('joui-ft');
    var conteudoCard3 = document.querySelector('.conteudo-card2');
    var clickX = event.clientX - imgElement.getBoundingClientRect().left; // Posição X do clique em relação à imagem

    if (clickX < imgElement.offsetWidth / 3) {
        imgElement.style.backgroundImage = "url('5.jpg')"; // Clique à esquerda
        imgElement.style.backgroundSize = "120%";
        conteudoCard3.textContent = "(Segredo na Floresta)";
    } else if (clickX < imgElement.offsetWidth * 2 / 3) {
        imgElement.style.backgroundImage = "url('6.gif')"; // Clique à direita
        imgElement.style.backgroundSize = "auto 420px";
        conteudoCard3.textContent = "(Calamidade)";
    } else {
        imgElement.style.backgroundImage = "url('4.png')"; // Clique no meio
        imgElement.style.backgroundSize = "120%";
        conteudoCard3.textContent = "(Desconjuração Início)";
    }
}



function trocarImagem3(event) {
    var imgElement = document.getElementById('arthur-ft');
    var conteudoCard2 = document.querySelector('.conteudo-card');
    var clickX = event.clientX - imgElement.getBoundingClientRect().left; // Posição X do clique em relação à imagem

    if (clickX < imgElement.offsetWidth / 3) {
        imgElement.style.backgroundImage = "url('1.jpg')"; // Clique à esquerda
        imgElement.style.backgroundSize = "120%";
        conteudoCard2.textContent = "(Segredo na Floresta)";
        console.log("foi");
    } else if (clickX < imgElement.offsetWidth * 2 / 3) {
        imgElement.style.backgroundImage = "url('3.gif')"; // Clique à direita
        imgElement.style.backgroundSize = "auto 420px";
        conteudoCard2.textContent = "(Desconjuração Final)";
    } else {
        imgElement.style.backgroundImage = "url('2.jpg')"; // Clique no meio
        imgElement.style.backgroundSize = "120%";
        conteudoCard2.textContent = "(Desconjuração Início)";
    }
}

