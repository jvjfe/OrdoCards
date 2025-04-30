export function trocarImagem(e, params) {
    const lado = e.clientX < window.innerWidth / 3
        ? 'esquerda'
        : e.clientX > (2 * window.innerWidth) / 3
            ? 'direita'
            : 'centro';

    params.setEstilo(params[lado].estilo);
    params.setDesc(params[lado].descricao);
}
