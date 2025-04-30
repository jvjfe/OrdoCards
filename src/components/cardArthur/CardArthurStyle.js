import styled, { keyframes } from 'styled-components';

// Animação de brilho para CONTAINER (box-shadow)
const neonBoxPulseArthur = keyframes`
  0% {
    box-shadow:
      0 0 10px rgba(255, 0, 0, 0.4),
      0 0 20px rgba(255, 0, 0, 0.6),
      0 0 30px rgba(255, 0, 0, 0.7),
      0 0 40px rgba(255, 0, 0, 0.9);
  }
  50% {
    box-shadow:
      0 0 20px rgba(255, 0, 0, 0.6),
      0 0 30px rgba(255, 0, 0, 0.8),
      0 0 40px rgba(255, 0, 0, 1),
      0 0 50px rgba(255, 0, 0, 1);
  }
  100% {
    box-shadow:
      0 0 10px rgba(255, 0, 0, 0.4),
      0 0 20px rgba(255, 0, 0, 0.6),
      0 0 30px rgba(255, 0, 0, 0.7),
      0 0 40px rgba(255, 0, 0, 0.9);
  }
`;

// Animação de brilho para TEXTO (text-shadow)
const neonTextPulseArthur = keyframes`
  0% {
    text-shadow:
      0 0 8px rgba(255, 50, 50, 0.6),
      0 0 15px rgba(255, 100, 100, 0.8),
      0 0 25px rgba(255, 0, 0, 1);
  }
  50% {
    text-shadow:
      0 0 15px rgba(255, 0, 0, 0.8),
      0 0 25px rgba(255, 0, 0, 1),
      0 0 35px rgba(255, 0, 0, 1);
  }
  100% {
    text-shadow:
      0 0 8px rgba(255, 50, 50, 0.6),
      0 0 15px rgba(255, 100, 100, 0.8),
      0 0 25px rgba(255, 0, 0, 1);
  }
`;

export const CardArthurContainer = styled.div`
  width: 290px;
  height: 400px;
  border-radius: 15px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: transform 0.6s ease;
  transform-style: preserve-3d;
  animation: ${neonBoxPulseArthur} 1.5s infinite;
  cursor: default;
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
  color: #e6ccff;
  margin-bottom: 8px;
  transition: transform 0.4s ease, text-shadow 0.4s ease 0.2s;
  animation: ${neonTextPulseArthur} 2s infinite;
  width: auto; /* Ajuste de largura */
  height: auto; /* Ajuste de altura */
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
  color:rgb(255, 0, 0);
  text-align: center;
  transition: transform 0.4s ease, text-shadow 0.4s ease 0.2s;
  animation: ${neonTextPulseArthur} 1.2s infinite alternate;
  width: auto; /* Ajuste de largura */
  padding: 5px 10px;
  box-sizing: content-box;

  &:hover {
    transform: translateY(-5px);
    text-shadow: 
  }
`;
