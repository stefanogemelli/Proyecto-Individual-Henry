import { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/actions";

import Card from "../Card/Card";
import ArrowDRight from "./Arrows/ArrowDRight";
import ArrowRight from "./Arrows/ArrowRight";
import ArrowLeft from "./Arrows/ArrowLeft";
import ArrowDLeft from "./Arrows/ArrowDLeft";

import s from "./PaginationStyles.module.css";

function Pagination() {
  const allCountries = useSelector((state) => state.filteredCountries);
  const currentPage = useSelector((state) => state.currentPage);

  const dispatch = useDispatch();
  const [page, setPage] = useState(currentPage);

  useEffect(() => dispatch(setCurrentPage(page)), [page]);

  // allCountries = 10
  const amount = 9;

  const totalPages = Math.ceil(allCountries.length / amount);

  const paginatedCountries = allCountries.slice(
    (page - 1) * amount, // pag2 =>  [9]
    page * amount // pag2 =>  [18]
  ); // slice(0,9)

  const handleClick = (e) => {
    setPage(e.target.value);
  };
  const handleLR = (e) => {
    if (e.target.value === "L") {
      page > 1 && setPage(page - 1);
    } else {
      page < totalPages && setPage(page + 1);
    }
  };

  const buttonIndex = []; //  [1,2,3,4,5]
  for (let i = 1; i <= totalPages; i++) {
    buttonIndex.push(i);
  }

  return (
    <>
      <div>
        <div className={`${s.buttons}`}>
          <button onClick={handleLR} value="L" className={s.btnArrow}>
            <ArrowDLeft />
          </button>
          <button onClick={handleLR} value="L" className={s.btnArrow}>
            <ArrowLeft />
          </button>
          {buttonIndex.map((i) => (
            <button
              key={i}
              value={i}
              onClick={handleClick}
              className={`${s.btn} ${page == i && s.active}`}
            >
              {i}
            </button>
          ))}
          <button onClick={handleLR} value="R" className={s.btnArrow}>
            <ArrowRight />
          </button>
          <button onClick={handleLR} value="R" className={s.btnArrow}>
            <ArrowDRight />
          </button>
        </div>

        <div className={`${s.cardsContainer}`}>
          {paginatedCountries.map((country) => (
            <Card key={country.id} country={country} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Pagination;
