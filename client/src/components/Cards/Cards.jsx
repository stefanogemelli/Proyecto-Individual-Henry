import { useSelector } from "react-redux";
import Card from "../Card/Card";
import s from "./CardsStyles.module.css";

function Cards() {
  const allCountries = useSelector((state) => state.allCountries);

  return (
    <div className={`${s.cardsContainer}`}>
      {allCountries.map((country) => (
        <Card country={country} />
      ))}
    </div>
  );
}

export default Cards;
