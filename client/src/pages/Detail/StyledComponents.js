import styled from "styled-components";

import DetailAmerica from "../../assets/DetailAmerica.jpg";
import DetailEuAfr from "../../assets/DetailEuAfr.jpg";
import DetailOceAs from "../../assets/DetailOceAs.jpg";

const images = {
  "North America": DetailAmerica,
  Africa: DetailEuAfr,
  Asia: DetailOceAs,
  Europe: DetailEuAfr,
};

export const Container = styled.div``;

export const Background = styled.div`
  background-image: url(${({ continent }) => images[continent]});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
  /* background-color: red; */
`;
export const Capa = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: -1;
  opacity: 0.7;
  backdrop-filter: blur(5px);
  mix-blend-mode: overlay;
`;
