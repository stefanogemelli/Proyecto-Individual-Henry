import s from "./NavBar.module.css";

function NavBar({ page, setPage }) {
  const handleClick = (str) => {
    setPage(str);
  };
  return (
    <ul className={s.ul}>
      <li
        onClick={() => {
          handleClick("project");
        }}
        className={`${s.li} ${page === "project" && s.active}`}
      >
        Sobre el proyecto
      </li>
      {/* <li
        onClick={() => {
          handleClick("me");
        }}
        className={`${s.li} ${page === "me" && s.active}`}
      >
        Sobre mí
      </li> */}
    </ul>
  );
}

export default NavBar;
