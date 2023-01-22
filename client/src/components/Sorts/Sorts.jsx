import Select from "../Select/Select";
import { sort } from "../../redux/actions";

const sortOptions = ["Desactivado", "Ascendente", "Descendente"];

function Sorts() {
  return (
    <div>
      <h2>Ordenar por</h2>
      <label>Nombre</label>
      <Select options={sortOptions} action={sort} />

      <label>Población</label>
      <Select options={sortOptions} action={sort} />
    </div>
  );
}

export default Sorts;

// [ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente los países por orden alfabético y por cantidad de población
