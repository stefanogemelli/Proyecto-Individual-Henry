import ChartDetail from "../../components/ChartDetail/ChartDetail";
import DescriptionDetail from "../../components/DescriptionDetail/DescriptionDetail";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import s from "./styles.module.css";

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
      <div className={s.container}>
        <div className={s.bg} continent={country.continent}></div>
        <div className={s.capa}></div>
      </div>
    </>
  );
}

export default Detail;
