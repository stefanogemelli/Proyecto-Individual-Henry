import Form from "./components/Form/Form";

import s from "./CreateStyles.module.css";

function CreateActivity() {
  return (
    <div className={`${s.container}`}>
      <Form />
    </div>
  );
}

export default CreateActivity;
