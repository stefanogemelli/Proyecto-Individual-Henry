import s from "./Input.module.css";

const namesToRender = {
  name: "Nombre",
};

function Input({ handleChange, value, name, type, error }) {
  return (
    <>
      <div className={`${s.form__group} ${s.field}`}>
        <input
          required
          placeholder={name}
          className={s.form__field}
          type={type}
          onChange={handleChange}
          value={value}
          name={name}
          id={name}
        />
        <label className={s.form__label} htmlFor={name}>
          {namesToRender[name]}
        </label>
      </div>
      <span className={`${s.spanError} ${error && s.errorVisible}`}>
        {error}*
      </span>
    </>
  );
}

export default Input;
