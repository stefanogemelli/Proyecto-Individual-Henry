import Select from "./Select/Select";
import s from "./styles.module.css";

const sortOptions = ["Desactivado", "Ascendente", "Descendente"];

function Sorts() {
  return (
    <div className={s.container}>
      <h2 className={s.h2}>Ordenar por</h2>
      <label>Nombre</label>
      <Select options={sortOptions} name="name" />

      <label>Población</label>
      <Select options={sortOptions} name="population" />
    </div>
  );
}

export default Sorts;

// [ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente los países por orden alfabético y por cantidad de población
