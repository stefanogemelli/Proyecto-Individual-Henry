import { useSelector } from "react-redux";
import BtnCountry from "./BtnCountry/BtnCountry";

import s from "./show.module.css";

function ShowCountries({ idCountries, setIdCountries }) {
  const countriesKeysNames = useSelector((state) => state.countriesKeysNames);
  const countryNames = idCountries.map((id) => [id, countriesKeysNames[id]]); // array de arrays [id,name]

  return (
    <div className={s.container}>
      <h2 className={s.h2}>Países asignados</h2>
      <hr className={s.hr} />
      {countryNames.map((arr) => (
        <BtnCountry
          key={arr[1]}
          name={arr[1]}
          id={arr[0]}
          setIdCountries={setIdCountries}
        />
      ))}
    </div>
  );
}

export default ShowCountries;
