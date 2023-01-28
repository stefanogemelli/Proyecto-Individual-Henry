import s from "./NavBar.module.css";

function NavBar({ page, setPage }) {
  const handleClick = (value) => {
    setPage(value);
  };
  return (
    <ul className={s.ul}>
      <li
        onClick={() => {
          handleClick("Crear Actividad");
        }}
        className={`${s.li} ${page === "Crear Actividad" && s.active}`}
      >
        Crear Actividad
      </li>
      <li
        onClick={() => {
          handleClick("Ver Actividades");
        }}
        className={`${s.li} ${page === "Ver Actividades" && s.active}`}
      >
        Ver Actividades
      </li>
    </ul>
  );
}

export default NavBar;
