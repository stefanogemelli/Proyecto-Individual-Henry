import s from "./season.module.css";

function SelectSeason({ handleChange, value, name, error }) {
  return (
    <>
      <select
        className={s.select}
        onChange={handleChange}
        value={value}
        name={name}
      >
        <option hidden>Seleccionar temporada</option>
        <option value="Invierno">Invierno</option>
        <option value="Primavera">Primavera</option>
        <option value="Verano">Verano</option>
        <option value="Otoño">Otoño</option>
      </select>
      <span className={`${s.spanError} ${error && s.errorVisible}`}>
        {error}
      </span>
    </>
  );
}

export default SelectSeason;
