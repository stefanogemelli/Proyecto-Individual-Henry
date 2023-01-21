import { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";

import s from "./PaginationStyles.module.css";

function Pagination() {
  const allCountries = useSelector((state) => state.filteredCountries);
  const [page, setPage] = useState(1);

  // allCountries = 10

  const amount = 9;

  const totalPages = Math.ceil(allCountries.length / amount); // cantidad de paginas

  const paginatedCountries = allCountries.slice(
    (page - 1) * amount, // pag2 =>  [9]
    page * amount // pag2 =>  [18]
  ); // slice(0,9)

  const handleClick = (e) => {
    console.log(e.target.value);
    setPage(e.target.value);
  };

  const buttonIndex = []; //  [1,2,3,4,5]
  for (let i = 1; i <= totalPages; i++) {
    buttonIndex.push(i);
  }

  return (
    <>
      <div>
        <div className={`${s.buttons}`}>
          {buttonIndex.map((i) => (
            <button value={i} onClick={handleClick}>
              {i}
            </button>
          ))}
        </div>

        <div className={`${s.cardsContainer}`}>
          {paginatedCountries.map((country) => (
            <Card key={country.id} country={country} />
          ))}
        </div>

        <div className={`${s.buttons}`}>
          {buttonIndex.map((i) => (
            <button value={i} onClick={handleClick}>
              {i}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default Pagination;