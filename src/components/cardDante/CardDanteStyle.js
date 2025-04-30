import styled, { keyframes } from 'styled-components';

const neonPulseDante = keyframes`
  0% {
    text-shadow: 
      0 0 10px rgba(60, 60, 60, 0.6),
      0 0 20px rgba(90, 90, 90, 0.6),
      0 0 30px rgba(50, 50, 50, 0.8),
      0 0 40px rgba(80, 80, 80, 0.9);
  }
  50% {
    text-shadow: 
      0 0 20px rgba(90, 90, 90, 0.8),
      0 0 30px rgba(50, 50, 50, 0.9),
      0 0 40px rgba(80, 80, 80, 1),
      0 0 50px rgba(90, 90, 90, 1);
  }
  100% {
    text-shadow: 
      0 0 10px rgba(60, 60, 60, 0.6),
      0 0 20px rgba(90, 90, 90, 0.6),
      0 0 30px rgba(50, 50, 50, 0.8),
      0 0 40px rgba(80, 80, 80, 0.9);
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
  transition: transform 0.4s ease, text-shadow 0.4s ease 0.2s;
  animation: ${neonPulseDante} 2s infinite;
  width: auto;
  height: auto;
  padding: 0;
  box-sizing: content-box;

  &:hover {
    transform: translateY(-10px);
    text-shadow: 
      0 0 12px #333, 
      0 0 22px #999;
  }
`;

export const VejaMais = styled.div`
  font-size: 12px;
  font-weight: 900;
  text-transform: uppercase;
  color: #888;
  text-align: center;
  transition: transform 0.4s ease, text-shadow 0.4s ease 0.2s;
  animation: ${neonPulseDante} 1.2s infinite alternate;
  width: auto;
  padding: 5px 10px;
  box-sizing: content-box;

  &:hover {
    transform: translateY(-5px);
    text-shadow: 
      0 0 10px #444, 
      0 0 20px #aaa;
  }
`;
