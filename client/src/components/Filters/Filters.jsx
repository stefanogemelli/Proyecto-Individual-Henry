import styled from "styled-components";
import Select from "./Select/Select";

const continents = [
  "Todos",
  "Asia",
  "North America",
  "South America",
  "Africa",
  "Europe",
  "Oceania",
];
const seasons = ["Desactivado", "Invierno", "Primavera", "Verano", "Otoño"];
const sort = ["Desactivado", "Ascendente", "Descendente"];
const a = 0;
function Filters() {
  // const [filters]
  return (
    <FilterContainer>
      <h2>Filtros</h2>
      <label>Continente</label>
      <Select options={continents} action={a} />

      <label>Temporada</label>
      <Select options={seasons} action={a} />
      <button>Limpiar Filtros</button>

      <h2>Ordenar por</h2>
      <label>Nombre</label>
      <Select options={sort} action={a} />

      <label>Población</label>
      <Select options={sort} action={a} />
    </FilterContainer>
  );
}

export default Filters;

// [ ] Botones/Opciones para filtrar por continente y por tipo de actividad turística
// -> continent
// -> hacer otra peticion a tabla de actividades

// [ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente los países por orden alfabético y por cantidad de población

const FilterContainer = styled.div`
  padding: 2rem;
  border: 1px solid white;
  width: 250px;
  height: min-content;
  position: absolute;
  left: 10px;
  top: 100px;
  display: flex;
  flex-direction: column;
`;
