import styled from "styled-components";
export const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
`;
export const H1 = styled.h1`
  font-size: 3rem;
  color: black;
  text-shadow: 1px 1px white;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const ButtonHome = styled.button`
  padding: 1rem 4rem;
  font-size: 1.7rem;
  letter-spacing: 3px;
  background-color: transparent;
  color: #151515;
  font-weight: 600;
  border: 3px solid #151515;
  border-radius: 3px;
  background-color: rgba(200, 200, 200, 0.1);
  backdrop-filter: blur(10px);
  z-index: 10;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.1s ease;
  &:hover {
    background-color: rgba(200, 200, 200, 0.2);
    color: #aaa;
    -webkit-text-stroke: 0.5px #505050;
  }
`;
export const Video = styled.video`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  z-index: -1;
`;
export const Capa = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: -1;
  opacity: 0.6;
  backdrop-filter: blur(5px);
  mix-blend-mode: overlay;
`;
