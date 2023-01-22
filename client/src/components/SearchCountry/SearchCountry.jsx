import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterCountries } from "../../redux/actions";

import searchIcon from "../../assets/busqueda.svg";
import reset from "../../assets/reset.svg";
import s from "./SearchCountryStyles.module.css";

function SearchCountry() {
  const [countryName, setCountryName] = useState("");
  const dispatch = useDispatch();
  const searchCountries = (e) => {
    e.preventDefault();
    dispatch(filterCountries({ filter: "name", value: countryName }));
  };
  const handleChange = (e) => {
    setCountryName(e.target.value);
  };
  const showAll = () => {
    dispatch(filterCountries({ filter: "name", value: "" }));
    setCountryName("");
  };
  return (
    <>
      <form onSubmit={searchCountries} className={`${s.searchContainer}`}>
        <h2>Busqueda</h2>
        <input
          onChange={handleChange}
          type="text"
          value={countryName}
          className={`${s.input}`}
        />
        <div className={`${s.buttonsContainer}`}>
          <button type="submit" className={`${s.buttonSearch}`}>
            <img src={searchIcon} alt="search" className={s.icon} />
          </button>
          <button type="button" onClick={showAll} className={`${s.button}`}>
            <img src={reset} alt="search" className={s.icon} />
          </button>
        </div>
      </form>
    </>
  );
}

export default SearchCountry;
