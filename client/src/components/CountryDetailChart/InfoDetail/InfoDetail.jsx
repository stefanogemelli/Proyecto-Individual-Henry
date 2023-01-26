import s from "./styles.module.css";

const add = {
  Area: "km²",
};

function InfoDetail({ prop, val }) {
  return (
    <div className={s.detailBox}>
      <h2 className={s.h2}>{prop}</h2>
      <p className={s.p}>
        {val} {add[prop]}
      </p>
    </div>
  );
}

export default InfoDetail;
