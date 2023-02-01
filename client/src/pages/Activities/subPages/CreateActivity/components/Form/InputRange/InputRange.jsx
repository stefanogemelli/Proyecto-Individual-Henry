import s from "./InputRange.module.css";

const namesToRender = {
  dificult: "Dificultad",
  duration: "Duración",
};

function InputRange({ handleChange, value, name, min, max, step }) {
  return (
    <>
      <label className={s.label} htmlFor={name}>
        {namesToRender[name]}
      </label>
      <input
        type="range"
        onChange={handleChange}
        value={value}
        name={name}
        id={name}
        min={min}
        max={max}
        step={step}
        className={s.range}
      />
      <span>
        {name === "duration"
          ? `${Math.trunc(value)}:${value % 1 ? "30" : "00"} hs`
          : value}
      </span>
    </>
  );
}

export default InputRange;
