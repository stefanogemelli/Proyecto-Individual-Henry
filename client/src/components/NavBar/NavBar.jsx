import { Link } from "react-router-dom";
import s from "./NavBarStyles.module.css";
function NavBar() {
  return (
    <>
      <nav className={`${s.nav}`}>
        <ul className={`${s.ul}`}>
          <li className={`${s.li}`}>
            <Link to="/home" className={`${s.link}`}>
              Home
            </Link>
          </li>
          <li className={`${s.li}`}>
            <Link to="/create" className={`${s.link}`}>
              Create
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
