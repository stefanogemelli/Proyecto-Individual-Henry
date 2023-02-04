import s from "./btn.module.css";

function BtnCountry({ name, id, setIdCountries }) {
  const handleClick = (id) => {
    setIdCountries((prev) => prev.filter((c) => c !== id));
  };
  return (
    <div className={s.country}>
      <p className={s.name}>{name}</p>
      <i className={s.icon} onClick={() => handleClick(id)}></i>
    </div>
  );
}

export default BtnCountry;
