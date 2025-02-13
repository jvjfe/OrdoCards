import React, { useState } from 'react';
import './CardJoui.css';

import { ConteudoBox, ConteudoCard, VejaMais } from "./CardJouiStyle";

// import ConteudoBox from "./CardJouiStyle";
// import ConteudoCard from "./CardJouiStyle";
// import VejaMais from "./CardJouiStyle";

import img5 from '../../img/5.jpg';
import img6 from '../../img/6.gif';
import img4 from '../../img/4.png';


import { trocarImagem } from '../../util/util';

import Card from '../card/Card';


function CardJoui() {

    const params = {
        esquerda: {
            estilo: {
                backgroundImage: `url(${img5})`,
                backgroundSize: "120%"
            },
            descricao: '(Segredo na Floresta)'
        },
        centro: {
            estilo: {
                backgroundImage: `url(${img6})`,
                backgroundSize: "auto 420px"
            },
            descricao: '(Calamidade)'
        },
        direita: {
            estilo: {
                backgroundImage: `url(${img4})`,
                backgroundSize: "120%"
            },
            descricao: '(Desconjuração)'
        }
    }

    const [est, setEst] = useState(params.centro.estilo);
    const [desc, setDesc] = useState(params.centro.descricao);

    params.setEstilo = setEst;
    params.setDesc = setDesc;

    return (
        <div className="card-Joui" style={est} id="card" onClick={(e) => trocarImagem(e, params)}>
            <Card titulo="Joui" desc={desc} conteudoBox={ConteudoBox} conteudoCard={ConteudoCard} vejaMais={VejaMais} />
        </div>
    );
}

export default CardJoui;