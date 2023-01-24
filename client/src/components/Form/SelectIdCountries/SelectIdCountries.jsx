import { useSelector } from "react-redux";

function SelectIdCountries({ idCountries, setIdCountries }) {
  const allCountries = useSelector((state) => state.allCountries);

  const handleSelect = (e) => {
    const newId = e.target.value;
    const idFinded = idCountries.find((id) => id === newId);
    if (idFinded) {
      setIdCountries(idCountries.filter((id) => id != newId));
    } else {
      setIdCountries([...idCountries, newId]);
    }
  };

  return (
    <select onChange={handleSelect}>
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
