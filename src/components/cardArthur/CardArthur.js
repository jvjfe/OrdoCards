import React, { useState } from 'react';
import './CardArthur.css';

import img5 from '../../img/1.jpg';
import img6 from '../../img/3.gif';
import img4 from '../../img/2.jpg';

import { trocarImagem } from '../../util/util';

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
            <div className="conteudo-box-2">
                <h1 className="card-titulo">Joui</h1>
                <p className="conteudo-card2">{desc}</p>
                <span className="veja-mais-2">Veja mais</span>
            </div>
        </div>
    );
}

export default CardJoui;