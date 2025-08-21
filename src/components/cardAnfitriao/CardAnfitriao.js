import React from 'react';
import './CardAnfitriao.css';
import { ConteudoBox, ConteudoCard, VejaMais } from './CardAnfitriaoStyle';
import Card from '../card/Card';

import img17a from '../../img/17.jpg';

function CardAnfitriao() {
    const imagem = {
        estilo: {
            backgroundImage: `url(${img17a})`,
            backgroundSize: '160%',
            backgroundPosition: '35% center',
            paddingTop: '100px',
        },
        descricao: 'O CAOS SEMPRE ESTARÁ AO SEU LADO, É INEVITÁVEL.',
    };

    return (
        <div className="card-container">
            <div
                className="card-anfitriao"
                style={imagem.estilo}
            >
                <Card
                    titulo="O Anfitrião"
                    desc={imagem.descricao}
                    conteudoBox={ConteudoBox}
                    conteudoCard={ConteudoCard}
                    vejaMais={VejaMais}
                />
            </div>
        </div>
    );
}

export default CardAnfitriao;
