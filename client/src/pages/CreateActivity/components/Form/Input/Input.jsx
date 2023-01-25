import s from "./Input.module.css";

const namesToRender = {
  name: "Nombre",
  dificult: "Dificultad",
  duration: "Duración",
};

function Input({ handleChange, value, name, type, error }) {
  return (
    <>
      <div class={`${s.form__group} ${s.field}`}>
        <input
          required
          placeholder={name}
          className={s.form__field}
          type={type}
          onChange={handleChange}
          value={value}
          name={name}
        />
        <label class={s.form__label} for={name}>
          {namesToRender[name]}
        </label>
        <span className={`${s.spanError} ${error && s.errorVisible}`}>
          {error}
        </span>
      </div>
    </>
  );
}

export default Input;
