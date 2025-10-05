import React from 'react';
import './CardDeusDaMorte.css';
import { ConteudoBox, ConteudoCard, VejaMais } from './CardDeusDaMorteStyle';
import Card from '../card/Card';

import img from '../../img/23.jpeg';

function CardDeusDaMorte() {
    const imagem = {
        estilo: {
            backgroundImage: `url(${img})`,
            backgroundSize: '290%',
            backgroundPosition: 'center',
            paddingTop: '100px',
        },
        descricao: 'É POSSÍVEL DESTRUIR A PRÓPRIA MORTE?',
    };

    return (
        <div className="card-container">
            <div
                className="card-deus"
                style={imagem.estilo}
            >
                <Card
                    titulo="Deus da Morte"
                    desc={imagem.descricao}
                    conteudoBox={ConteudoBox}
                    conteudoCard={ConteudoCard}
                    vejaMais={VejaMais}
                />
            </div>
        </div>
    );
}


export default CardDeusDaMorte;
