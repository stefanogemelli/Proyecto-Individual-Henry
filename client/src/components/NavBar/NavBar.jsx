import { Link, useLocation } from "react-router-dom";

import WorldIcon from "../WorldIcon/WorldIcon";

import s from "./NavBarStyles.module.css";

function NavBar() {
  const { pathname } = useLocation();
  return (
    <>
      <nav className={`${s.nav}`}>
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
          <li className={`${s.li}`}>
            <Link
              to="/about"
              className={`${s.btn} ${pathname.includes("/about") && s.active}`}
            >
              Acerca de
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
