import styled from "styled-components";
export const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
`;
export const ButtonHome = styled.button`
  padding: 1rem 4rem;
  font-size: 1.7rem;
  letter-spacing: 3px;
  background-color: transparent;
  color: #ccc;
  -webkit-text-stroke: 1px white;
  border: 1px solid #ddd;
  background-color: rgba(200, 200, 200, 0.1);
  backdrop-filter: blur(15px);
  z-index: 10;
  position: absolute;
  top: 40%;
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
  background-color: white;
  z-index: -1;
  opacity: 0.7;
  mix-blend-mode: overlay;
`;
