import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getCountriesFromApiByName,
  getAllCountriesApi,
  setCountrySearched,
} from "../../../redux/actions";

import searchIcon from "../../../assets/icons/busqueda.svg";
import reset from "../../../assets/icons/reset.svg";
import s from "./styles.module.css";

function SearchCountry() {
  const countrySearched = useSelector((state) => state.countrySearched);
  const [countryToSearch, setCountryToSearch] = useState(countrySearched || "");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getCountriesFromApiByName(countryToSearch));
    dispatch(setCountrySearched(countryToSearch));
  };
  const handleChange = (e) => {
    setCountryToSearch(e.target.value);
  };
  const showAll = () => {
    console.log("showAll");
    dispatch(setCountrySearched(""));
    dispatch(getAllCountriesApi());
    setCountryToSearch("");
  };
  return (
    <>
      <form onSubmit={handleSubmit} className={`${s.form}`}>
        <h2 className={s.h2}>Busqueda</h2>
        <div className={`${s.inpBtns}`}>
          <input
            onChange={handleChange}
            type="text"
            value={countryToSearch}
            className={`${s.input}`}
          />

          {!countrySearched ? (
            <button type="submit" className={`${s.btn}`}>
              <img src={searchIcon} alt="search" className={s.icon} />
            </button>
          ) : (
            <span onClick={showAll} className={`${s.btnReset}`}>
              <img src={reset} alt="reset" className={s.iconReset} />
            </span>
          )}
        </div>
      </form>

      <hr className={s.hr} />
    </>
  );
}

export default SearchCountry;
