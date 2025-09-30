import React from 'react';
import './CardMagistrada.css';
import { ConteudoBox, ConteudoCard, VejaMais } from './CardMagistradaStyle';
import Card from '../card/Card';

import img from '../../img/21.png';

function CardMagistrada() {
    const imagem = {
        estilo: {
            backgroundImage: `url(${img})`,
            backgroundSize: '500%',
            backgroundPosition: 'center',
            paddingTop: '100px',
        },
        descricao: 'A ETERNIDADE DO DESESPERO INFINITO DO CONHECIMENTO.',
    };

    return (
        <div className="card-container">
            <div
                className="card-magistrada"
                style={imagem.estilo}
            >
                <Card
                    titulo="A Magistrada"
                    desc={imagem.descricao}
                    conteudoBox={ConteudoBox}
                    conteudoCard={ConteudoCard}
                    vejaMais={VejaMais}
                />
            </div>
        </div>
    );
}

export default CardMagistrada;
