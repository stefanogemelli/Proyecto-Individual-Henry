import { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions";

import Pagination from "../../components/Pagination/Pagination";
import Filters from "../../components/Filters/Filters";
import SearchCountryByName from "../../components/SearchCountryByName/SearchCountryByName";
import s from "./HomeStyles.module.css";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getAllCountriesApi());
  }, []);

  return (
    <section className={`${s.container}`}>
      <SearchCountryByName />
      <Filters />

      <Pagination amount={9} />
    </section>
  );
}

export default Home;
