import React, { useState } from 'react';
import './CardKaiser.css';  // Você pode criar esse CSS se quiser complementar com efeitos adicionais
import { ConteudoBox, ConteudoCard, VejaMais } from './CardKaiserStyle'; // Estilos com tons roxos
import Card from '../card/Card';

import img1 from '../../img/7.jpg';  // Imagem 1 do Kaiser
import img2 from '../../img/9.gif'; // Imagem 2 do Kaiser
import img3 from '../../img/8.png'; // Imagem 3 do Kaiser

function CardKaiser() {
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
                backgroundSize: '117%',
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
            <div className={`card-kaiser ${fade ? 'fade-out' : ''}`} style={imagens[index].estilo}>
                <Card
                    titulo="Kaiser Cohen"
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

export default CardKaiser;
