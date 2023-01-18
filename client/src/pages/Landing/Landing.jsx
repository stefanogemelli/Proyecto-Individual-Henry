import { Link } from "react-router-dom";

import { Container, H1, Video, ButtonHome, Capa } from "./Styled-Components";
import BGLanding from "../../assets/BGLanding.mp4";

function Landing() {
  const handleClick = () => {};
  return (
    <>
      <Container>
        <H1>Proyecto Individual Countries</H1>
        <Link to="/home">
          <ButtonHome onClick={handleClick}>Inicio</ButtonHome>
        </Link>
        <Video autoPlay loop muted>
          <source src={BGLanding} type="video/mp4" />
        </Video>
        <Capa></Capa>
      </Container>
    </>
  );
}

export default Landing;
