import { Link, useLocation } from "react-router-dom";

import s from "./NavBarStyles.module.css";

function NavBar() {
  const { pathname } = useLocation();
  return (
    <>
      <nav className={`${s.nav}`}>
        {/* <div className={`${s.bg}`}></div>
        <div className={`${s.capa}`}></div> */}

        <ul className={`${s.ul}`}>
          <li className={`${s.li}`}>
            <Link
              to="/home"
              className={`${s.btn} ${pathname == "/home" && s.active}`}
            >
              Inicio
            </Link>
          </li>
          <li className={`${s.li}`}>
            <Link
              to="/createactivity"
              className={`${s.btn} ${
                pathname == "/createactivity" && s.active
              }`}
            >
              Crear Actividad
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
