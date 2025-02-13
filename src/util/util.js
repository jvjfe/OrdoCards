export function trocarImagem(event, params) {
    const { esquerda, centro, direita, setEstilo, setDesc } = params
    console.log(params)
    console.log(esquerda)

    let imgElement = document.getElementById('card');
    let clickX = event.clientX - imgElement.getBoundingClientRect().left; // Posição X do mouse em relação à imagem

    if (clickX < imgElement.offsetWidth / 3) { // Passar o mouse à esquerda
        setEstilo(esquerda.estilo)
        setDesc(esquerda.descricao)
    } else if (clickX < imgElement.offsetWidth * 2 / 3) { // Passar o mouse no meio
        setEstilo(centro.estilo)
        setDesc(centro.descricao)
    } else { // Passar o mouse à direita
        setEstilo(direita.estilo)
        setDesc(direita.descricao)
    }
}