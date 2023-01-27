import { Link, useLocation } from "react-router-dom";

import WorldIcon from "../WorldIcon/WorldIcon";

import s from "./NavBarStyles.module.css";

function NavBar() {
  const { pathname } = useLocation();
  return (
    <>
      <nav className={`${s.nav}`}>
        {/* <div className={`${s.bg}`}></div>
        <div className={`${s.capa}`}></div> */}
        <Link to="/home" className={s.icon}>
          <WorldIcon width={"50px"} height={"50px"} />
        </Link>

        <ul className={`${s.ul}`}>
          <li className={`${s.li}`}>
            <Link
              to="/home"
              className={`${s.btn} ${pathname === "/home" && s.active}`}
            >
              Inicio
            </Link>
          </li>
          {/* <li className={`${s.li}`}>
            <Link
              to="/activities/createactivity"
              className={`${s.btn} ${
                pathname === "/activities/createactivity" && s.active
              }`}
            >
              Crear Actividad
            </Link>
          </li> */}
          <li className={`${s.li}`}>
            <Link
              to="/activities"
              className={`${s.btn} ${
                pathname.includes("/activities") && s.active
              }`}
            >
              Actividades
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
