import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllCountriesApi } from "../../../../../../../redux/actions";

import s from "./selectc.module.css";

function SelectIdCountries({ idCountries, setIdCountries }) {
  const allCountriesHashMap = useSelector((state) => state.countriesKeysNames);
  const dispatch = useDispatch();

  useEffect(() => {
    typeof allCountriesHashMap === "object" &&
      !Object.keys(allCountriesHashMap).length &&
      dispatch(getAllCountriesApi());
  });

  const allCountries = [];
  for (let i in allCountriesHashMap) {
    allCountries.push({ id: [i], name: allCountriesHashMap[i] });
  }

  const handleSelect = (e) => {
    const newId = e.target.value;
    const idFinded = idCountries.find((id) => id === newId);
    if (!idFinded) {
      setIdCountries([...idCountries, newId]);
    }
  };

  return (
    <select onChange={handleSelect} className={s.select}>
      <option hidden>Seleccionar Paises</option>
      {allCountries?.map((c) => (
        <option key={c.id} value={c.id} name={c.name}>
          {c.name}
        </option>
      ))}
    </select>
  );
}

export default SelectIdCountries;
