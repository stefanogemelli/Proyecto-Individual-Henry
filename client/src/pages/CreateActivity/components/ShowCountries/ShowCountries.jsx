import { useSelector } from "react-redux";
import BtnCountry from "./BtnCountry/BtnCountry";

import s from "./show.module.css";

function ShowCountries({ idCountries }) {
  const countriesKeysNames = useSelector((state) => state.countriesKeysNames);
  const countryNames = idCountries.map((id) => countriesKeysNames[id]);

  return (
    <div className={s.container}>
      <h2 className={s.h2}>Países asignados</h2>
      <hr className={s.hr} />
      {countryNames.map((name) => (
        <BtnCountry key={name} name={name} />
      ))}
    </div>
  );
}

export default ShowCountries;
