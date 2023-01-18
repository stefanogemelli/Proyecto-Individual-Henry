import { Link } from "react-router-dom";
import s from "./NavBarStyles.module.css";
function NavBar() {
  return (
    <>
      <nav className={`${s.nav}`}>
        <ul className={`${s.ul}`}>
          <li className={`${s.li}`}>
            <Link to="/home" className={`${s.link}`}>
              Inicio
            </Link>
          </li>
          <li className={`${s.li}`}>
            <Link to="/createactivity" className={`${s.link}`}>
              Crear Actividad
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
