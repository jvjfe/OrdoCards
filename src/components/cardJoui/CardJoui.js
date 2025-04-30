import React, { useState } from 'react';
import './CardJoui.css';
import { ConteudoBox, ConteudoCard, VejaMais } from './CardJouiStyle';
import Card from '../card/Card';

import img5 from '../../img/5.jpg';
import img6 from '../../img/6.gif';
import img4 from '../../img/4.png';

function CardJoui() {
    const imagens = [
        {
            estilo: {
                backgroundImage: `url(${img5})`,
                backgroundSize: '120%',
            },
            descricao: '(Segredo na Floresta)',
        },
        {
            estilo: {
                backgroundImage: `url(${img6})`,
                backgroundSize: 'auto 420px',
            },
            descricao: '(Calamidade)',
        },
        {
            estilo: {
                backgroundImage: `url(${img4})`,
                backgroundSize: '120%',
            },
            descricao: '(Desconjuração)',
        },
    ];

    const [index, setIndex] = useState(1);
    const [fade, setFade] = useState(false);

    const trocarImagem = (novoIndex) => {
        setFade(true);
        setTimeout(() => {
            setIndex(novoIndex);
            setFade(false);
        }, 300); // tempo de fade
    };

    const anterior = () => {
        const novo = index === 0 ? imagens.length - 1 : index - 1;
        trocarImagem(novo);
    };

    const proximo = () => {
        const novo = index === imagens.length - 1 ? 0 : index + 1;
        trocarImagem(novo);
    };

    return (
        <div className="card-container">
            <div className={`card-joui ${fade ? 'fade-out' : ''}`} style={imagens[index].estilo}>
                <Card
                    titulo="Joui Jouki"
                    desc={imagens[index].descricao}
                    conteudoBox={ConteudoBox}
                    conteudoCard={ConteudoCard}
                    vejaMais={VejaMais}
                />
            </div>

            <div className="controls">
                <button onClick={anterior}>⬅️</button>
                <button onClick={proximo}>➡️</button>
            </div>
        </div>
    );
}

export default CardJoui;
