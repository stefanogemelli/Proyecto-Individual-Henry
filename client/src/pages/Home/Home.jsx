import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";

import SearchCountry from "../../components/SearchCountry/SearchCountry";
import SideBar from "../../components/SideBar/SideBar";
import Pagination from "../../components/Pagination/Pagination";

import s from "./HomeStyles.module.css";

function Home() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.allCountries);
  useEffect(() => {
    !allCountries.length && dispatch(actions.getAllCountriesApi());
  }, []);

  return (
    <section className={`${s.container}`}>
      <div className={`${s.background}`}></div>
      <div className={`${s.capa}`}></div>
      {/* <SearchCountry /> */}
      <SideBar />

      <Pagination />
    </section>
  );
}

export default Home;
