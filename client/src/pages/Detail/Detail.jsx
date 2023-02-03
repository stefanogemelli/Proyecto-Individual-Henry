import axios from "axios";

import CountryDetailChart from "../../components/CountryDetailChart/CountryDetailChart";
import CountryDetailActivities from "../../components/CountryDetailActivities/CountryDetailActivities";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import s from "./styles.module.css";

function Detail() {
  const { idCountry } = useParams();
  const [country, setCountry] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3001/countries/${idCountry}`)
      .then(({ data }) => setCountry(data))
      .catch((err) => {
        console.log(err);
      });
    return setCountry({});
  }, [idCountry]);

  const {
    id,
    area,
    capital,
    continent,
    flagImg,
    name,
    population,
    subregion,
    activities,
  } = country;
  return (
    <>
      <div className={s.container}>
        <div className={s.bg} continent={country.continent}></div>
        {/* <div className={s.capa}></div> */}
        <CountryDetailChart
          props={{
            id,
            area,
            capital,
            continent,
            flagImg,
            name,
            population,
            subregion,
          }}
        />

        <CountryDetailActivities activities={activities} name={name} />
      </div>
    </>
  );
}

export default Detail;
