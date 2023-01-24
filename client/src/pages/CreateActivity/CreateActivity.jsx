import Form from "../../components/Form/Form";

import s from "./CreateStyles.module.css";

function CreateActivity() {
  return (
    <section className={`${s.container}`}>
      <div className={s.bg}></div>
      <Form />
    </section>
  );
}

export default CreateActivity;
