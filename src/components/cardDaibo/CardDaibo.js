import React from 'react';
import './CardDaibo.css';
import { ConteudoBox, ConteudoCard, VejaMais } from './CardDaiboStyle';
import Card from '../card/Card';

import img from '../../img/22.png';

function CardDaibo() {
    const imagem = {
        estilo: {
            backgroundImage: `url(${img})`,
            backgroundSize: '127%',
            backgroundPosition: 'center',
            paddingTop: '100px',
        },
        descricao: 'VOCÊ NÃO DEVE SE ENVOLVER COM O DIABO.',
    };

    return (
        <div className="card-container">
            <div
                className="card-daibo"
                style={imagem.estilo}
            >
                <Card
                    titulo="O Diabo"
                    desc={imagem.descricao}
                    conteudoBox={ConteudoBox}
                    conteudoCard={ConteudoCard}
                    vejaMais={VejaMais}
                />
            </div>
        </div>
    );
}


export default CardDaibo;
