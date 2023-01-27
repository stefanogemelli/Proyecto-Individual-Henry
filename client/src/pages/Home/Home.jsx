import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountriesApi } from "../../redux/actions";

import SideBar from "./SideBar/SideBar";
import Pagination from "./Pagination/Pagination";

import s from "./HomeStyles.module.css";

function Home() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.allCountries);
  useEffect(() => {
    !allCountries.length && dispatch(getAllCountriesApi());
  });

  return (
    <section className={`${s.container}`}>
      <div className={`${s.background}`}></div>

      <SideBar />

      <Pagination />
    </section>
  );
}

export default Home;
