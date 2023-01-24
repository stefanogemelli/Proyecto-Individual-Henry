import s from "./styles.module.css";

function InfoDetail({ prop, val }) {
  return (
    <div className={s.detailBox}>
      <h2 className={s.h2}>{prop}</h2>
      {/* <hr className={s.hr} /> */}
      <p className={s.p}>{val}</p>
    </div>
  );
}

export default InfoDetail;
