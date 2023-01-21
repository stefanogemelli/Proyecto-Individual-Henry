import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchByName } from "../../redux/actions";
import s from "./SearchCountryStyles.module.css";

function SearchCountry() {
  const [countryName, setCountryName] = useState("");
  const dispatch = useDispatch();
  const searchCountries = (e) => {
    e.preventDefault();
    //dispatch de searchByName
    dispatch(searchByName(countryName));
    setCountryName("");
  };
  const handleChange = (e) => {
    setCountryName(e.target.value);
  };
  const showAll = () => {
    dispatch(searchByName(""));
    setCountryName("");
  };
  return (
    <>
      <form onSubmit={searchCountries} className={`${s.searchContainer}`}>
        <input
          onChange={handleChange}
          type="text"
          value={countryName}
          className={`${s.input}`}
        />
        <button type="submit" className={`${s.button}`}>
          Buscar
        </button>
        <button type="button" onClick={showAll} className={`${s.button}`}>
          Mostrar todos
        </button>
      </form>
    </>
  );
}

export default SearchCountry;
