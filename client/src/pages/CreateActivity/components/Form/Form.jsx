import { useState } from "react";
import { createActivity } from "../../services/createActivity";
import formValidate from "../../services/formValidate";

import Input from "./Input/Input";

import s from "./FormStyles.module.css";
import SelectIdCountries from "./SelectIdCountries/SelectIdCountries";
import ShowCountries from "../ShowCountries/ShowCountries";
import SelectSeason from "./SelectSeason/SelectSeason";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";

function Form() {
  const [infoModal, setInfoModal] = useState({});
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
    setInputs({ ...inputs, [name]: value });
    setErrors({ ...errors, [name]: formValidate(name, value) });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await createActivity({ ...inputs, idCountries });
    setInfoModal(data);
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
      <ConfirmationModal infoModal={infoModal} setInfoModal={setInfoModal} />

      <form onSubmit={handleSubmit} className={`${s.form}`}>
        <label className={`${s.label}`}>
          Datos para la creación de la actividad
        </label>
        <Input
          handleChange={handleChange}
          value={inputs.name}
          name="name"
          type="text"
          error={errors.name}
        />
        <Input
          handleChange={handleChange}
          value={inputs.dificult}
          name="dificult"
          type="number"
          error={errors.dificult}
        />
        <Input
          handleChange={handleChange}
          value={inputs.duration}
          name="duration"
          type="text"
          error={errors.duration}
        />

        <SelectSeason
          handleChange={handleChange}
          value={inputs.season}
          name="season"
          error={errors.season}
        />
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
