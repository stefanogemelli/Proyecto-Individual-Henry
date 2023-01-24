import InfoDetail from "./InfoDetail/InfoDetail";

import s from "./styles.module.css";

function CountryDetailChart({ props }) {
  const { id, area, capital, continent, flagImg, name, population, subregion } =
    props;
  return (
    <div className={s.container}>
      <h2 className={s.title}>Información del País</h2>
      <h3 className={s.name}> {name}</h3>

      <img className={s.img} src={flagImg} alt={`bandera de ${name}`} />
      <div className={s.info}>
        <InfoDetail prop={"Identificador"} val={id} />
        <InfoDetail prop={"Capital"} val={capital} />
        <InfoDetail prop={"Continente"} val={continent} />
        <InfoDetail prop={"Subregión"} val={subregion} />
        <InfoDetail prop={"Población"} val={population} />
        <InfoDetail prop={"Area"} val={area} />
      </div>
    </div>
  );
}

export default CountryDetailChart;
