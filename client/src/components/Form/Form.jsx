import { useState } from "react";
import { createActivity } from "../../services/createActivity";

import s from "./FormStyles.module.css";
import SelectIdCountries from "./SelectIdCountries/SelectIdCountries";
import ShowCountries from "./ShowCountries/ShowCountries";

function Form() {
  const [inputs, setInputs] = useState({
    name: "",
    dificult: "",
    duration: "",
    season: "",
  });
  const [idCountries, setIdCountries] = useState([]);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = createActivity({ ...inputs, idCountries });
    // MOSTRAR VENTANA EMERGENTE CON MENSAJE DE CONFIRMACION
    setInputs({
      name: "",
      dificult: "",
      duration: "",
      season: "",
    });
    setIdCountries([]);
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit} className={`${s.form}`}>
        <label className={`${s.label}`}>
          Ingresar los datos para la creacion de la nueva actividad
        </label>
        <input
          onChange={handleChange}
          className={`${s.input}`}
          type="text"
          name="name"
          value={inputs.name}
        />
        <input
          onChange={handleChange}
          className={`${s.input}`}
          type="text"
          name="dificult"
          value={inputs.dificult}
        />
        <input
          onChange={handleChange}
          className={`${s.input}`}
          type="text"
          name="duration"
          value={inputs.duration}
        />
        <input
          onChange={handleChange}
          className={`${s.input}`}
          type="text"
          name="season"
          value={inputs.season}
        />
        <SelectIdCountries
          idCountries={idCountries}
          setIdCountries={setIdCountries}
        />
        <button type="submit">Crear Actividad</button>
      </form>
      <ShowCountries idCountries={idCountries} />
    </>
  );
}

export default Form;
