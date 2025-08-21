import React, { useState } from 'react';
import './CardDante.css';
import { ConteudoBox, ConteudoCard, VejaMais } from './CardDanteStyle';
import Card from '../card/Card';

import img1 from '../../img/10.png';
import img2 from '../../img/12.gif';
import img3 from '../../img/11.jpg';

function CardDante() {
    const imagens = [
        {
            estilo: {
                backgroundImage: `url(${img1})`,
                backgroundSize: '180%',
                backgroundPosition: 'center center',
                paddingTop: '100px',
            },
            descricao: '(Desconjuração Final)',
        },
        {
            estilo: {
                backgroundImage: `url(${img2})`,
                backgroundSize: '750px 440px',
                backgroundPosition: '15% center',
            },
            descricao: '(Desconjuração Início)',
        },
        {
            estilo: {
                backgroundImage: `url(${img3})`,
                backgroundSize: '330px 450px',
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
        }, 300);
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
            <div className={`card-dante ${fade ? 'fade-out' : ''}`} style={imagens[index].estilo}>
                <Card
                    titulo="Dante"
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

export default CardDante;
