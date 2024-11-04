function trocarImagem(event) {
    var imgElement = document.getElementById('kaiser-ft');
    var conteudoCard = document.querySelector('.conteudo-card3');
    var clickX = event.clientX - imgElement.getBoundingClientRect().left; // Posição X do mouse em relação à imagem

    if (clickX < imgElement.offsetWidth / 3) {
        imgElement.style.backgroundImage = "url('7.jpg')"; // Passar o mouse à esquerda
        imgElement.style.backgroundSize = "120%";
        conteudoCard.textContent = "(Segredo na Floresta)";
    } else if (clickX < imgElement.offsetWidth * 2 / 3) {
        imgElement.style.backgroundImage = "url('9.gif')"; // Passar o mouse no meio
        imgElement.style.backgroundSize = "auto 420px";
        conteudoCard.textContent = "(Desconjuração Final)";
    } else {
        imgElement.style.backgroundImage = "url('8.png')"; // Passar o mouse à direita
        imgElement.style.backgroundSize = "117%"; // Tamanho menor
        conteudoCard.textContent = "(Desconjuração Início)";
    }
}

// Adicione o evento mousemove ao elemento da imagem
var imgElement = document.getElementById('kaiser-ft');
imgElement.addEventListener('mousemove', trocarImagem);

function trocarImagem2(event) {
    var imgElement = document.getElementById('joui-ft');
    var conteudoCard3 = document.querySelector('.conteudo-card2');
    var clickX = event.clientX - imgElement.getBoundingClientRect().left; // Posição X do mouse em relação à imagem

    if (clickX < imgElement.offsetWidth / 3) {
        imgElement.style.backgroundImage = "url('5.jpg')"; // Passar o mouse à esquerda
        imgElement.style.backgroundSize = "120%";
        conteudoCard3.textContent = "(Segredo na Floresta)";
    } else if (clickX < imgElement.offsetWidth * 2 / 3) {
        imgElement.style.backgroundImage = "url('6.gif')"; // Passar o mouse no meio
        imgElement.style.backgroundSize = "auto 420px";
        conteudoCard3.textContent = "(Calamidade)";
    } else {
        imgElement.style.backgroundImage = "url('4.png')"; // Passar o mouse à direita
        imgElement.style.backgroundSize = "120%";
        conteudoCard3.textContent = "(Desconjuração Início)";
    }
}

// Adicione o evento mousemove ao elemento da imagem
var imgElement2 = document.getElementById('joui-ft');
imgElement2.addEventListener('mousemove', trocarImagem2);



function trocarImagem3(event) {
    var imgElement = document.getElementById('arthur-ft');
    var conteudoCard2 = document.querySelector('.conteudo-card');
    var clickX = event.clientX - imgElement.getBoundingClientRect().left; // Posição X do mouse em relação à imagem

    if (clickX < imgElement.offsetWidth / 3) {
        imgElement.style.backgroundImage = "url('1.jpg')"; // Passar o mouse à esquerda
        imgElement.style.backgroundSize = "120%";
        conteudoCard2.textContent = "(Segredo na Floresta)";
        console.log("foi");
    } else if (clickX < imgElement.offsetWidth * 2 / 3) {
        imgElement.style.backgroundImage = "url('3.gif')"; // Passar o mouse no meio
        imgElement.style.backgroundSize = "auto 420px";
        conteudoCard2.textContent = "(Desconjuração Final)";
    } else {
        imgElement.style.backgroundImage = "url('2.jpg')"; // Passar o mouse à direita
        imgElement.style.backgroundSize = "120%";
        conteudoCard2.textContent = "(Desconjuração Início)";
    }
}

// Adicione o evento mousemove ao elemento da imagem
var imgElement3 = document.getElementById('arthur-ft');
imgElement3.addEventListener('mousemove', trocarImagem3);


function trocarImagem4(event) {
    var imgElement = document.getElementById('dante-ft');
    var conteudoCard = document.querySelector('.conteudo-card');
    var clickX = event.clientX - imgElement.getBoundingClientRect().left; // Posição X do mouse em relação à imagem

    // Calcula a largura total da imagem e ajusta as condições para cada região (esquerda, meio, direita)
    if (clickX < imgElement.offsetWidth / 3) {
        // Passar o mouse à esquerda
        imgElement.style.backgroundImage = "url('10.png')";
        imgElement.style.backgroundSize = "180%";
        imgElement.style.backgroundPosition = "center center";
        imgElement.style.paddingTop = "100px";
        conteudoCard.textContent = "(Segredo na Floresta)";
    } else if (clickX < imgElement.offsetWidth * 2 / 3) {
        // Passar o mouse no meio
        imgElement.style.backgroundImage = "url('12.gif')";
        imgElement.style.backgroundSize = "500px 400px";
        conteudoCard.textContent = "(Desconjuração Final)";
    } else {
        // Passar o mouse à direita
        imgElement.style.backgroundImage = "url('11.jpg')";
        imgElement.style.backgroundSize = "260px 425px";
        conteudoCard.textContent = "(Desconjuração Início)";
    }
}

// Adiciona o evento mousemove ao elemento da imagem
var imgElement4 = document.getElementById('dante-ft');
imgElement4.addEventListener('mousemove', trocarImagem4);
