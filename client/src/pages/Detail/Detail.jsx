import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Background, Capa } from "./StyledComponents";

function Detail() {
  const { idCountry } = useParams();
  const [country, setCountry] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3001/countries/${idCountry}`)
      .then((data) => data.json())
      .then((data) => setCountry(data))
      .catch((err) => {
        console.log(err);
      });
    return setCountry({});
  }, [idCountry]);
  console.log(country);
  return (
    <>
      <Container>
        <Background continent={country.continent}></Background>
        <Capa></Capa>
        {/* flata renderizar country nomas */}
      </Container>
    </>
  );
}

export default Detail;
