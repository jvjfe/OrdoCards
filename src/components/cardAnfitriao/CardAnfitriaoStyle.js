import styled, { keyframes } from 'styled-components';

const neonChaosAnfitriao = keyframes`
  0% {
    text-shadow: 
      0 0 10px #8e44ad,   /* Roxo */
      0 0 20px #8e44ad,
      0 0 30px #8e44ad;
    color: #dcdcdc;
  }
  25% {
    text-shadow: 
      0 0 10px #3498db,   /* Azul */
      0 0 20px #3498db,
      0 0 30px #3498db;
    color: #dcdcdc;
  }
  50% {
    text-shadow: 
      0 0 10px #2ecc71,   /* Verde */
      0 0 20px #2ecc71,
      0 0 30px #2ecc71;
    color: #dcdcdc;
  }
  75% {
    text-shadow: 
      0 0 10px #e91e63,   /* Rosa */
      0 0 20px #e91e63,
      0 0 30px #e91e63;
    color: #fff;
  }
  100% {
    text-shadow: 
      0 0 10px #8e44ad,   /* Roxo de novo (loop) */
      0 0 20px #8e44ad,
      0 0 30px #8e44ad;
    color: #dcdcdc;
  }
`;

export const ConteudoBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  transform-style: preserve-3d;
  transition: transform 0.5s ease-in-out;
  perspective: 1000px;

  &:hover {
    transform: rotateX(5deg) rotateY(5deg) scale(1.03);
  }
`;

export const ConteudoCard = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: #dcdcdc;
  margin-bottom: 8px;
  transition: transform 0.2s ease, text-shadow 0.2s ease;
  animation: ${neonChaosAnfitriao} 0.6s infinite; /* bem rápido para simular caos */
  width: auto;
  height: auto;
  padding: 0;
  box-sizing: content-box;

  &:hover {
    transform: translateY(-10px);
  }
`;

export const VejaMais = styled.div`
  font-size: 12px;
  font-weight: 900;
  text-transform: uppercase;
  color: #888;
  text-align: center;
  transition: transform 0.2s ease, text-shadow 0.2s ease;
  animation: ${neonChaosAnfitriao} 0.8s infinite alternate;
  width: auto;
  padding: 5px 10px;
  box-sizing: content-box;

  &:hover {
    transform: translateY(-5px);
  }
`;
