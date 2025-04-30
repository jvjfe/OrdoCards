import React from 'react';
import './Card.css';

function Card({ titulo, desc, conteudoBox: Box, conteudoCard: CardText, vejaMais: VejaMais }) {
    return (
        <Box>
            <CardText>{titulo}</CardText>
            <VejaMais>{desc}</VejaMais>
        </Box>
    );
}

export default Card;
