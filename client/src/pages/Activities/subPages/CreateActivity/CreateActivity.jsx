import Form from "./components/Form/Form";

import s from "./CreateStyles.module.css";

function CreateActivity() {
  return (
    <div className={`${s.container}`}>
      <Form title={"Crear nueva actividad"} />
    </div>
  );
}

export default CreateActivity;
