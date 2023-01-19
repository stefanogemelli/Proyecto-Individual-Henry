import { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";

function Pagination({ amount }) {
  const allCountries = useSelector((state) => state.allCountries);

  const [pag, setPag] = useState(0);
  // console.log(children);
  const paginatedCountries = allCountries.slice(
    pag * amount,
    (pag + 1) * amount
  );
  return (
    <>
      <div></div>
      {paginatedCountries.map((country) => (
        <Card key={country.id} country={country} />
      ))}
      <button></button>
    </>
  );
}

export default Pagination;
