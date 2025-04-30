import styled, { keyframes } from 'styled-components';

const neonPulseKaiser = keyframes`
  0% {
    text-shadow: 
      0 0 10px rgba(138, 43, 226, 0.6),
      0 0 20px rgba(186, 85, 211, 0.6),
      0 0 30px rgba(148, 0, 211, 0.8),
      0 0 40px rgba(138, 43, 226, 0.9);
  }
  50% {
    text-shadow: 
      0 0 20px rgba(186, 85, 211, 0.8),
      0 0 30px rgba(148, 0, 211, 0.9),
      0 0 40px rgba(138, 43, 226, 1),
      0 0 50px rgba(186, 85, 211, 1);
  }
  100% {
    text-shadow: 
      0 0 10px rgba(138, 43, 226, 0.6),
      0 0 20px rgba(186, 85, 211, 0.6),
      0 0 30px rgba(148, 0, 211, 0.8),
      0 0 40px rgba(138, 43, 226, 0.9);
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
  color: #e6ccff;
  margin-bottom: 8px;
  transition: transform 0.4s ease, text-shadow 0.4s ease 0.2s;
  animation: ${neonPulseKaiser} 2s infinite;
  width: auto; /* Ajuste de largura */
  height: auto; /* Ajuste de altura */
  padding: 0;
  box-sizing: content-box;

  &:hover {
    transform: translateY(-10px);
    text-shadow: 
      0 0 12px #a020f0, 
      0 0 22px #dda0dd;
  }
`;

export const VejaMais = styled.div`
  font-size: 12px;
  font-weight: 900;
  text-transform: uppercase;
  color: #a020f0;
  text-align: center;
  transition: transform 0.4s ease, text-shadow 0.4s ease 0.2s;
  animation: ${neonPulseKaiser} 1.2s infinite alternate;
  width: auto; /* Ajuste de largura */
  padding: 5px 10px;
  box-sizing: content-box;

  &:hover {
    transform: translateY(-5px);
    text-shadow: 
      0 0 10px #a020f0, 
      0 0 20px #dda0dd;
  }
`;
