import SearchCountry from "../SearchCountry/SearchCountry";

import s from "./styles.module.css";
import Filters from "../Filters/Filters";
import Sorts from "../Sorts/Sorts";
function SideBar() {
  console.log("SideBar");
  return (
    <aside className={s.container}>
      <SearchCountry />

      <Filters />

      <Sorts />
    </aside>
  );
}

export default SideBar;
