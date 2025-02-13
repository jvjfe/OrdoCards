let prevScrollPos = window.pageYOffset; // Armazena a posição de rolagem anterior
const header = document.querySelector('header'); // Seleciona o elemento header

window.onscroll = function () {
    let currentScrollPos = window.pageYOffset; // Posição de rolagem atual

    // Se a rolagem for para baixo, diminui a opacidade do header
    if (prevScrollPos < currentScrollPos) {
        header.style.opacity = "0"; // Diminui a opacidade (desaparece)
    } else {
        header.style.opacity = "1"; // Aumenta a opacidade (volta a aparecer)
    }

    // Atualiza a posição de rolagem anterior
    prevScrollPos = currentScrollPos;
}


// FUNÇÕES DAS CARTAS

function trocarImagem(event) {
    var imgElement = document.getElementById('kaiser-ft');
    var conteudoCard = document.querySelector('.conteudo-card3');
    var clickX = event.clientX - imgElement.getBoundingClientRect().left; // Posição X do clique em relação à imagem

    if (clickX < imgElement.offsetWidth / 3) {
        imgElement.style.backgroundImage = "url('img/7.jpg')"; // Clique à esquerda
        imgElement.style.backgroundSize = "120%";
        conteudoCard.textContent = "(Segredo na Floresta)";
    } else if (clickX < imgElement.offsetWidth * 2 / 3) {
        imgElement.style.backgroundImage = "url('img/9.gif')"; // Clique no meio
        imgElement.style.backgroundSize = "auto 420px";
        conteudoCard.textContent = "(Desconjuração Final)";
    } else {
        imgElement.style.backgroundImage = "url('img/8.png')"; // Clique à direita
        imgElement.style.backgroundSize = "117%"; // Tamanho menor
        conteudoCard.textContent = "(Desconjuração Início)";
    }
}

// Adicione o evento click ao elemento da imagem
var imgElement = document.getElementById('kaiser-ft');
imgElement.addEventListener('click', trocarImagem);

function trocarImagem2(event) {
    var imgElement = document.getElementById('joui-ft');
    var conteudoCard3 = document.querySelector('.conteudo-card2');
    var clickX = event.clientX - imgElement.getBoundingClientRect().left; // Posição X do mouse em relação à imagem

    if (clickX < imgElement.offsetWidth / 3) {
        imgElement.style.backgroundImage = "url('img/5.jpg')"; // Passar o mouse à esquerda
        imgElement.style.backgroundSize = "120%";
        conteudoCard3.textContent = "(Segredo na Floresta)";
    } else if (clickX < imgElement.offsetWidth * 2 / 3) {
        imgElement.style.backgroundImage = "url('img/6.gif')"; // Passar o mouse no meio
        imgElement.style.backgroundSize = "auto 420px";
        conteudoCard3.textContent = "(Calamidade)";
    } else {
        imgElement.style.backgroundImage = "url('img/4.png')"; // Passar o mouse à direita
        imgElement.style.backgroundSize = "120%";
        conteudoCard3.textContent = "(Desconjuração Início)";
    }
}

// Adicione o evento mousemove ao elemento da imagem
var imgElement2 = document.getElementById('joui-ft');
imgElement2.addEventListener('click', trocarImagem2);



function trocarImagem3(event) {
    var imgElement = document.getElementById('arthur-ft');
    var conteudoCard2 = document.querySelector('.conteudo-card');
    var clickX = event.clientX - imgElement.getBoundingClientRect().left; // Posição X do mouse em relação à imagem

    if (clickX < imgElement.offsetWidth / 3) {
        imgElement.style.backgroundImage = "url('img/1.jpg')"; // Passar o mouse à esquerda
        imgElement.style.backgroundSize = "120%";
        conteudoCard2.textContent = "(Segredo na Floresta)";
        console.log("foi");
    } else if (clickX < imgElement.offsetWidth * 2 / 3) {
        imgElement.style.backgroundImage = "url('img/3.gif')"; // Passar o mouse no meio
        imgElement.style.backgroundSize = "auto 420px";
        conteudoCard2.textContent = "(Desconjuração Final)";
    } else {
        imgElement.style.backgroundImage = "url('img/2.jpg')"; // Passar o mouse à direita
        imgElement.style.backgroundSize = "120%";
        conteudoCard2.textContent = "(Desconjuração Início)";
    }
}

// Adicione o evento mousemove ao elemento da imagem
var imgElement3 = document.getElementById('arthur-ft');
imgElement3.addEventListener('click', trocarImagem3);


function trocarImagem4(event) {
    var imgElement = document.getElementById('dante-ft');
    var conteudoCard = document.querySelector('.conteudo-card');
    var clickX = event.clientX - imgElement.getBoundingClientRect().left; // Posição X do mouse em relação à imagem

    // Calcula a largura total da imagem e ajusta as condições para cada região (esquerda, meio, direita)
    if (clickX < imgElement.offsetWidth / 3) {
        // Passar o mouse à esquerda
        imgElement.style.backgroundImage = "url('img/10.png')";
        imgElement.style.backgroundSize = "180%";
        imgElement.style.backgroundPosition = "center center";
        imgElement.style.paddingTop = "100px";
        conteudoCard.textContent = "(Segredo na Floresta)";
    } else if (clickX < imgElement.offsetWidth * 2 / 3) {
        // Passar o mouse no meio
        imgElement.style.backgroundImage = "url('img/12.gif')";
        imgElement.style.backgroundSize = "500px 400px";
        conteudoCard.textContent = "(Desconjuração Final)";
    } else {
        // Passar o mouse à direita
        imgElement.style.backgroundImage = "url('img/11.jpg')";
        imgElement.style.backgroundSize = "260px 425px";
        conteudoCard.textContent = "(Desconjuração Início)";
    }
}

// Adiciona o evento mousemove ao elemento da imagem
var imgElement4 = document.getElementById('dante-ft');
imgElement4.addEventListener('click', trocarImagem4);
