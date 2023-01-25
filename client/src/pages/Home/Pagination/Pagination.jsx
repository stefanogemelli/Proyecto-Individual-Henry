import { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../../../redux/actions";

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

  // allCountries = 10
  const amount = 9;

  const totalPages = Math.ceil(allCountries.length / amount);

  const paginatedCountries = allCountries.slice(
    (currentPage - 1) * amount, // pag2 =>  [9]
    currentPage * amount // pag2 =>  [18]
  ); // slice(0,9)

  const handleLR = (value) => {
    switch (value) {
      case "LL":
        currentPage > 1 && dispatch(setCurrentPage(1));

        break;
      case "L":
        currentPage > 1 && dispatch(setCurrentPage(currentPage - 1));
        break;
      case "R":
        currentPage < totalPages && dispatch(setCurrentPage(currentPage + 1));
        break;
      case "RR":
        currentPage < totalPages && dispatch(setCurrentPage(totalPages));
        break;
      default:
        dispatch(setCurrentPage(value));
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
          <button onClick={() => handleLR("LL")} className={s.btnArrow}>
            <ArrowDLeft />
          </button>
          <button onClick={() => handleLR("L")} className={s.btnArrow}>
            <ArrowLeft />
          </button>
          {buttonIndex.map((i) => (
            <button
              key={i}
              onClick={() => handleLR(i)}
              className={`${s.btn} ${currentPage == i && s.active}`}
            >
              {i}
            </button>
          ))}
          <button onClick={() => handleLR("R")} className={s.btnArrow}>
            <ArrowRight />
          </button>
          <button onClick={() => handleLR("RR")} className={s.btnArrow}>
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
