import { useState } from "react";
import { createActivity } from "../../services/createActivity";
import formValidate from "../../services/formValidate";

import Input from "./Input/Input";
import InputRange from "./InputRange/InputRange";

import s from "./FormStyles.module.css";
import SelectIdCountries from "./SelectIdCountries/SelectIdCountries";
import ShowCountries from "../ShowCountries/ShowCountries";
import SelectSeason from "./SelectSeason/SelectSeason";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";

function Form() {
  const [infoModal, setInfoModal] = useState({});
  const [inputs, setInputs] = useState({
    name: "",
    dificult: 1,
    duration: 0.5,
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
    if (
      errors.name === "" &&
      errors.dificult === "" &&
      errors.duration === "" &&
      errors.season === "" &&
      idCountries.length > 0
    ) {
      const data = await createActivity({ ...inputs, idCountries });
      setInfoModal(data);
      setInputs({
        name: "",
        dificult: "",
        duration: "",
        season: "",
      });
      setIdCountries([]);
    }
  };
  return (
    <div className={s.formAndShowCountries}>
      {!!Object.keys(infoModal).length && (
        <ConfirmationModal infoModal={infoModal} setInfoModal={setInfoModal} />
      )}

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

        {/* <Input
          handleChange={handleChange}
          value={inputs.dificult}
          name="dificult"
          type="number"
          error={errors.dificult}
        /> */}
        <InputRange
          handleChange={handleChange}
          value={inputs.dificult}
          name="dificult"
          min="1"
          max="5"
          step={1}
          error={errors.dificult}
        />
        {/* <Input
          handleChange={handleChange}
          value={inputs.duration}
          name="duration"
          error={errors.duration}
        /> */}
        <InputRange
          handleChange={handleChange}
          value={inputs.duration}
          name="duration"
          min=".5"
          max="12"
          step="0.5"
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
      <ShowCountries
        idCountries={idCountries}
        setIdCountries={setIdCountries}
      />
    </div>
  );
}

export default Form;
