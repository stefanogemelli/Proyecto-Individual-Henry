import FilterSelect from "./FilterSelect/FilterSelect";

import { clearFilters } from "../../../redux/actions";

import s from "./styles.module.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { getActivityNames } from "../services/getActivityNames";

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
  const [activities, setActivities] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    getActivityNames().then((data) => console.log(data));
  }, []);

  const clearFiltersHandler = () => {
    dispatch(clearFilters());
  };

  return (
    <>
      <div className={s.container}>
        <h2 className={s.h2}>Filtros</h2>
        <label>Continente</label>
        <FilterSelect options={continents} name={"continent"} />

        <label>Actividad</label>
        <FilterSelect options={seasons} name={"activities"} />
        <button onClick={clearFiltersHandler} className={s.btn}>
          Limpiar Filtros
        </button>
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
