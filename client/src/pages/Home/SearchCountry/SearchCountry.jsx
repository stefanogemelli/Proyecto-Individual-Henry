// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getCountriesFromApiByName,
  getAllCountriesApi,
  setCountrySearch,
} from "../../../redux/actions";

import searchIcon from "../../../assets/icons/busqueda.svg";
import reset from "../../../assets/icons/reset.svg";
import s from "./styles.module.css";

function SearchCountry() {
  const countrySearch = useSelector((state) => state.countrySearch);

  const dispatch = useDispatch();
  const searchCountries = (e) => {
    e.preventDefault();
    dispatch(getCountriesFromApiByName(countrySearch));
  };
  const handleChange = (e) => {
    dispatch(setCountrySearch(e.target.value));
  };
  const showAll = () => {
    getAllCountriesApi();
    dispatch(setCountrySearch(""));
    dispatch(getAllCountriesApi());
  };
  return (
    <>
      <form onSubmit={searchCountries} className={`${s.searchContainer}`}>
        <h2 className={s.h2}>Busqueda</h2>
        <input
          onChange={handleChange}
          type="text"
          value={countrySearch}
          className={`${s.input}`}
        />
        <div className={`${s.buttonsContainer}`}>
          <button type="submit" className={`${s.btn}`}>
            <img src={searchIcon} alt="search" className={s.icon} />
          </button>

          <button type="button" onClick={showAll} className={`${s.btn}`}>
            <img src={reset} alt="search" className={s.iconReset} />
          </button>
        </div>
      </form>
      <hr className={s.hr} />
    </>
  );
}

export default SearchCountry;
