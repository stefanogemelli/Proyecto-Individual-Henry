import s from "./CardStyles.module.css";

function Card({ country }) {
  return (
    <article>
      <img src={country.flagImg} alt={country.name} className={`${s.flag}`} />
      <h2>{country.name}</h2>
      <p>{country.continent}</p>
    </article>
  );
}

export default Card;
