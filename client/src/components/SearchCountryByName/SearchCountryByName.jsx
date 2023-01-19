import { useState } from "react";
import { useDispatch } from "react-redux";

function SearchCountryByName() {
  const [countryName, setCountryName] = useState("");
  const searchCountries = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setCountryName(e.target.value);
  };
  return (
    <>
      <form onSubmit={searchCountries}>
        <input onChange={handleChange} type="text" value={countryName} />
        <button type="submit">Buscar País</button>
      </form>
    </>
  );
}

export default SearchCountryByName;
