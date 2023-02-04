import { useHistory } from "react-router-dom";

import s from "./Confirmation.module.css";

function ConfirmationModal({ infoModal, setInfoModal }) {
  const { push } = useHistory();
  const { message, activity } = infoModal;

  const closeModal = () => {
    setInfoModal({});
    push("/home");
  };
  return (
    <div className={`${s.bg} ${activity?.name && s.modalActive}`}>
      <div className={s.modal}>
        <h2 className={s.message}>{message}</h2>
        <div className={s.card}>
          <h3 className={s.h3}>{activity?.name}</h3>
          <hr className={s.hr} />
          <p className={s.p}>{`Temporada: ${activity?.season}`}</p>
          <p className={s.p}>{`Duración: ${activity?.duration} hs`}</p>
          <p className={s.p}>{`Dificultad: ${activity?.dificult}`}</p>
        </div>
        <button onClick={closeModal} className={s.btn}>
          Aceptar
        </button>
      </div>
    </div>
  );
}

export default ConfirmationModal;
