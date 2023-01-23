import s from "./styles.module.css";
import FilterSelect from "./FilterSelect/FilterSelect";

const continents = [
  "Todos",
  "Africa",
  "Antarctica",
  "Asia",
  "North America",
  "South America",
  "Europe",
  "Oceania",
];
const seasons = ["Desactivado", "Invierno", "Primavera", "Verano", "Otoño"];

function Filters() {
  return (
    <>
      <div className={s.container}>
        <h2 className={s.h2}>Filtros</h2>
        <label>Continente</label>
        <FilterSelect options={continents} name={"continent"} />

        <label>Actividad</label>
        <FilterSelect options={seasons} name={"activities"} />
        <button className={s.btn}>Limpiar Filtros</button>
      </div>
      <hr className={s.hr} />
    </>
  );
}

export default Filters;

// [ ] Botones/Opciones para filtrar por continente y por tipo de actividad turística
// -> continent
// -> hacer otra peticion a tabla de actividades

// const FilterContainer = styled.div`
//   width: 100%;
//   height: min-content;
//   display: flex;
//   /* flex-direction: column; */
// `;
