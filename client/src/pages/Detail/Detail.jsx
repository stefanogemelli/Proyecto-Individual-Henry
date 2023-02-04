// import axios from "axios";
import { useAxiosGet } from "../../hooks/useAxiosGet";

import CountryDetailChart from "../../components/CountryDetailChart/CountryDetailChart";
import CountryDetailActivities from "../../components/CountryDetailActivities/CountryDetailActivities";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import s from "./styles.module.css";

function Detail() {
  const { idCountry } = useParams();
  const [country, setCountry] = useState({});
  const [isLoaded, data, error] = useAxiosGet(`/countries/${idCountry}`);

  if (!isLoaded) return <h1>Loading</h1>;
  if (error) return <h1>Error</h1>;

  return (
    <>
      <div className={s.container}>
        <div className={s.bg} continent={country.continent}></div>

        {data && <CountryDetailChart props={data} />}
        <CountryDetailActivities
          activities={data?.activities}
          name={data?.name}
        />
      </div>
    </>
  );
}

export default Detail;
