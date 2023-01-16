import { Link } from "react-router-dom";

import { Container, Video, ButtonHome, Capa } from "./Styled-Components";
import MundoOscuro from "../../assets/MundoOscuro.mp4";

function Landing() {
  const handleClick = () => {};
  return (
    <>
      <Container>
        <Link to="/home">
          <ButtonHome onClick={handleClick}>Inicio</ButtonHome>
        </Link>
        <Video autoPlay loop muted>
          <source src={MundoOscuro} type="video/mp4" />
        </Video>
        <Capa></Capa>
      </Container>
    </>
  );
}

export default Landing;
