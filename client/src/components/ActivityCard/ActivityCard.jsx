import { deleteActivity } from "./services/deleteActivity";

import s from "./ActivityCard.module.css";

function ActivityCard({ activity }) {
  const { id, name, dificult, duration, season } = activity;

  const handleDelete = async (id) => {
    // podria deletear la actividadd desde la ruta de actividades y desde la ruta de country solo desasignar (pathname)
    await deleteActivity(id);
    window.location.reload();
  };
  return (
    <div className={s.card}>
      <h3 className={s.h3}>{name}</h3>
      <hr className={s.hr} />
      <p className={s.p}>{`Temporada: ${season}`}</p>
      <p className={s.p}>{`Duración: ${duration}hs`}</p>
      <p className={s.p}>{`Dificultad: ${dificult}`}</p>
      <i className={s.deleteIcon} onClick={() => handleDelete(id)}></i>
    </div>
  );
}

export default ActivityCard;
