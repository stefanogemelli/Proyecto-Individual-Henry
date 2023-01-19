import { useSelector } from "react-redux";

function ShowCountries({ idCountries }) {
  const countriesKeysNames = useSelector((state) => state.countriesKeysNames);
  const countryNames = idCountries.map((id) => countriesKeysNames[id]);

  return (
    <div>
      {countryNames.map((name) => (
        <p>{name}</p>
      ))}
    </div>
  );
}

export default ShowCountries;
