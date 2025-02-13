import React from 'react';
import './Card.css';

function Card({ titulo, desc, conteudoBox, conteudoCard, vejaMais }) {
    return (
        <div style={conteudoBox}>
            <h1 className="card-titulo">{titulo}</h1>
            <p style={conteudoCard}>{desc}</p>
            <span style={vejaMais}>Veja mais</span>
        </div>
    );
}

export default Card;