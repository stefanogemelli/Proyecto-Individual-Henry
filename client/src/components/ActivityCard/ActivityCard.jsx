import { deleteActivity } from "./services/deleteActivity";
import { unassignActivity } from "./services/unassignActivity";

import s from "./ActivityCard.module.css";
import { Link, useLocation, useParams } from "react-router-dom";

function ActivityCard({ activity }) {
  const { id, name, dificult, duration, season } = activity;
  const { pathname } = useLocation();
  const { idCountry } = useParams();

  const handleDelete = async (id) => {
    if (pathname === "/activities") {
      await deleteActivity(id);
      window.location.reload();
    } else {
      await unassignActivity(idCountry, id);
      window.location.reload();
    }
  };

  return (
    <div className={s.card}>
      <h3 className={s.h3}>{name}</h3>
      <hr className={s.hr} />
      <p className={s.p}>{`Temporada: ${season}`}</p>
      <p className={s.p}>{`Duración: ${Math.trunc(duration)}:${
        (duration % 1) * 6
      }0hs`}</p>
      <p className={s.p}>{`Dificultad: ${dificult}`}</p>
      <i className={s.deleteIcon} onClick={() => handleDelete(id)}></i>
      <Link to={`/activities/update/${id}`}>
        <i className={s.editIcon}></i>
      </Link>
    </div>
  );
}

export default ActivityCard;
