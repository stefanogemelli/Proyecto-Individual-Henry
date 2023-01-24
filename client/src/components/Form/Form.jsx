import { useState } from "react";
import { createActivity } from "../../services/createActivity";
import formValidate from "../../services/formValidate";

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
  const [errors, setErrors] = useState({
    name: "",
    dificult: "",
    duration: "",
    season: "",
    idCountries: [],
  });

  const handleChange = (e) => {
    let [name, value] = [e.target.name, e.target.value];
    console.log(name);
    console.log(value);
    setInputs({ ...inputs, [name]: value });
    setErrors({ ...errors, [name]: formValidate(name, value) }); // formValidate => value
  };
  console.log(errors);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await createActivity({ ...inputs, idCountries });
    // MOSTRAR VENTANA EMERGENTE CON MENSAJE DE CONFIRMACION
    console.log(data);
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
      {/* <ConfirmationModal />  */}
      <form onSubmit={handleSubmit} className={`${s.form}`}>
        <label className={`${s.label}`}>
          Datos para la creación de la actividad
        </label>
        <input
          onChange={handleChange}
          className={`${s.input}`}
          type="text"
          name="name"
          value={inputs.name}
        />
        <span className={`${s.spanError} ${errors.name && s.errorVisible}`}>
          El nombre solo puede tener entre 4 y 20 letras*
        </span>

        <input
          onChange={handleChange}
          className={`${s.input}`}
          type="text"
          name="dificult"
          value={inputs.dificult}
        />
        <span className={`${s.spanError} ${errors.dificult && s.errorVisible}`}>
          Ingresar dificultad entre 1 y 5*
        </span>
        <input
          onChange={handleChange}
          className={`${s.input}`}
          type="text"
          name="duration"
          value={inputs.duration}
        />
        <span className={`${s.spanError} ${errors.duration && s.errorVisible}`}>
          La duración no puede exceder las 12hs*
        </span>

        <select
          className={s.seasonSelect}
          onChange={handleChange}
          value={inputs.season}
          name="season"
        >
          <option hidden>Seleccionar temporada</option>
          <option value="Invierno">Invierno</option>
          <option value="Primavera">Primavera</option>
          <option value="Verano">Verano</option>
          <option value="Otoño">Otoño</option>
        </select>
        <span className={`${s.spanError} ${errors.season && s.errorVisible}`}>
          {errors.season}
        </span>
        <SelectIdCountries
          idCountries={idCountries}
          setIdCountries={setIdCountries}
        />
        <span
          className={`${s.spanError} ${errors.idCountries && s.errorVisible}`}
        >
          {errors.idCountries}
        </span>
        <button type="submit" className={s.btn}>
          Crear Actividad
        </button>
      </form>
      <ShowCountries idCountries={idCountries} />
    </>
  );
}

export default Form;
