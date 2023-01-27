// import { Link } from "react-router-dom";

import s from "./ActivityCard.module.css";

function ActivityCard({ activity }) {
  const { name, dificult, duration, season } = activity;
  return (
    // <Link to={`/activity/${id}`}>
    <div className={s.card}>
      <h3 className={s.h3}>{name}</h3>
      <hr className={s.hr} />
      <p className={s.p}>{`Temporada: ${season}`}</p>
      <p className={s.p}>{`Duración: ${duration}`}</p>
      <p className={s.p}>{`Dificultad: ${dificult}`}</p>
    </div>
    // {/* </Link> */}
  );
}

export default ActivityCard;
