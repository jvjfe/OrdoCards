import styled, { keyframes } from "styled-components";

const neonJoui = keyframes`
    0% {
        box-shadow: rgba(255, 230, 0, 0.925) 0px 55px 90px -25px;
    }
    50% {
        box-shadow: rgba(255, 230, 0, 0.925) 0px 55px 60px -25px;
    }
    100% {
        box-shadow: rgba(255, 230, 0, 0.925) 0px 55px 40px -25px;
    }
`;

export const ConteudoBox = styled.div`
    height: 100%;
    width: 100%;
    border-radius: 0px 0px 10px 10px;
    box-shadow: rgba(255, 230, 0, 0.925) 0px 55px 50px -25px;
    transition: all 0.5s ease-in-out;
    padding: 40px 25px 25px 25px;
    transform-style: preserve-3d;
    animation: ${neonJoui} 1.5s infinite alternate;
`;

export const ConteudoCard = styled.div`
  padding-top: 20px;
  text-align: center;
  font-size: 21px;
  color: rgb(185, 185, 185);
  transition: all 0.5s ease-in-out;
  transform: translate3d(0px, 0px, 20px);

  &:hover {
    transform: translate3d(0px, 0px, 50px);
  }
`;

export const VejaMais = styled.div`
  display: block;
  font-size: 11px;
  font-weight: 900;
  text-transform: uppercase;
  color: rgb(255, 238, 0);
  padding-top: 25px;
  text-align: center;
  transition: all 0.5s ease-in-out;
  transform: translate3d(0px, 0px, 20px);

  &:hover {
    transform: translate3d(0px, 0px, 50px);
  }
`;
