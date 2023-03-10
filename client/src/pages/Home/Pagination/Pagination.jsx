// import { useEffect } from "react";
// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../../../redux/actions";

import Card from "../Card/Card";
import ArrowDRight from "./Arrows/ArrowDRight";
import ArrowRight from "./Arrows/ArrowRight";
import ArrowLeft from "./Arrows/ArrowLeft";
import ArrowDLeft from "./Arrows/ArrowDLeft";

import s from "./PaginationStyles.module.css";
import NoResults from "../NoResults/NoResults";

function Pagination() {
  const allCountries = useSelector((state) => state.filteredCountries);
  const currentPage = useSelector((state) => state?.currentPage);
  const dispatch = useDispatch();

  const amount = 9;
  const totalPages = Math.ceil(allCountries?.length / amount);

  const paginatedCountries = Array.isArray(allCountries)
    ? allCountries.slice((currentPage - 1) * amount, currentPage * amount)
    : [];

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
  buttonIndex.push(currentPage);
  for (let i = 1; i <= 2; i++) {
    if (buttonIndex[0] > 1) buttonIndex.unshift(currentPage - i);
    if (buttonIndex[buttonIndex.length - 1] < totalPages)
      buttonIndex.push(currentPage + i);
  }

  return (
    <>
      <div className={s.container}>
        <div className={`${s.buttons}`}>
          <span onClick={() => handleLR("LL")} className={s.btnArrow}>
            <ArrowDLeft />
          </span>
          <span onClick={() => handleLR("L")} className={s.btnArrow}>
            <ArrowLeft />
          </span>
          {buttonIndex?.map((i) => (
            <button
              key={i}
              onClick={() => handleLR(i)}
              className={`${s.btn} ${currentPage === i && s.active}`}
            >
              {i}
            </button>
          ))}
          <span onClick={() => handleLR("R")} className={s.btnArrow}>
            <ArrowRight />
          </span>
          <span onClick={() => handleLR("RR")} className={s.btnArrow}>
            <ArrowDRight />
          </span>
        </div>
        {
          <div className={`${s.cardsContainer} `}>
            {!!paginatedCountries.length ? (
              paginatedCountries.map((country) => (
                <Card key={country.id} country={country} />
              ))
            ) : (
              <NoResults />
            )}
          </div>
        }
      </div>
    </>
  );
}

export default Pagination;
