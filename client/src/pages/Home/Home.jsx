import Filters from "../../components/Filters/Filters";
import Button from "../../components/Buttons/Button";
import { useState } from "react";
function Home() {
  const [countryName, setCountryName] = useState("");
  const [countries, setCountries] = useState([]);
  //buscar paises por nombre

  const searchCountries = async (e) => {
    e.preventDefault();

    // setCountries(results);
  };
  const handleChange = (e) => {
    setCountryName(e.target.value);
  };
  return (
    <>
      <form onSubmit={searchCountries}>
        <input onChange={handleChange} type="text" value={countryName} />
        <Button type="submit">Search Countries</Button>
      </form>
      <Filters />

      {Array.isArray(countries) ? (
        countries.map((country) => <h2 key={country.id}>{country.name}</h2>)
      ) : (
        <h2>No se encontraron paises</h2>
      )}
    </>
  );
}

export default Home;
