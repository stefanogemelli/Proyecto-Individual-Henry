import s from "./btn.module.css";

function BtnCountry({ name }) {
  return (
    <div className={s.country}>
      <p className={s.name}>{name}</p>
      <i className={s.icon}></i>
    </div>
  );
}

export default BtnCountry;
