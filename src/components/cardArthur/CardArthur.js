import React, { useState } from 'react';
import './CardArthur.css';
import { ConteudoBox, ConteudoCard, VejaMais } from './CardArthurStyle';
import Card from '../card/Card';

import img1 from '../../img/1.jpg';
import img2 from '../../img/3.gif';
import img3 from '../../img/2.jpg';

function CardArthur() {
    const imagens = [
        {
            estilo: {
                backgroundImage: `url(${img1})`,
                backgroundSize: '120%',
            },
            descricao: '(Segredo na Floresta)',
        },
        {
            estilo: {
                backgroundImage: `url(${img2})`,
                backgroundSize: 'auto 420px',
            },
            descricao: '(Desconjuração Final)',
        },
        {
            estilo: {
                backgroundImage: `url(${img3})`,
                backgroundSize: '120%',
            },
            descricao: '(Desconjuração Início)',
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
            <div className={`card-arthur ${fade ? 'fade-out' : ''}`} style={imagens[index].estilo}>
                <Card
                    titulo="Arthur Cervero"
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

export default CardArthur;
