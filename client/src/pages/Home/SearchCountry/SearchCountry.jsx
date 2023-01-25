import { useState } from "react";
import { useDispatch } from "react-redux";

import {
  getCountriesFromApiByName,
  getAllCountriesApi,
} from "../../../redux/actions";

import searchIcon from "../../../assets/icons/busqueda.svg";
import reset from "../../../assets/icons/reset.svg";
import s from "./styles.module.css";

function SearchCountry() {
  const [countryName, setCountryName] = useState("");
  const dispatch = useDispatch();
  const searchCountries = (e) => {
    e.preventDefault();
    dispatch(getCountriesFromApiByName(countryName));
  };
  const handleChange = (e) => {
    setCountryName(e.target.value);
  };
  const showAll = () => {
    getAllCountriesApi();
    setCountryName("");
  };
  return (
    <>
      <form onSubmit={searchCountries} className={`${s.searchContainer}`}>
        <h2 className={s.h2}>Busqueda</h2>
        <input
          onChange={handleChange}
          type="text"
          value={countryName}
          className={`${s.input}`}
        />
        <div className={`${s.buttonsContainer}`}>
          <button type="submit" className={`${s.btn}`}>
            <img src={searchIcon} alt="search" className={s.icon} />
          </button>
          <button type="button" onClick={showAll} className={`${s.btn}`}>
            <img src={reset} alt="search" className={s.icon} />
          </button>
        </div>
      </form>
      <hr className={s.hr} />
    </>
  );
}

export default SearchCountry;
