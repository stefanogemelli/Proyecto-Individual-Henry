import { useState } from "react";

import s from "./FormStyles.module.css";
import SelectIdCountries from "./SelectIdCountries";

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
    const data = await fetch("http://localhost:3001/activities", {
      method: "POST",
      body: JSON.stringify(inputs),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((data) => data.json());
    // MOSTRAR VENTANA EMERGENTE CON MENSAJE DE CONFIRMACION
  };
  return (
    <form action="" onSubmit={handleSubmit} className={`${s.form}`}>
      <label className={`${s.label}`}>Insert data to create the activity</label>
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

      <button type="submit">Create Activity</button>
    </form>
  );
}

export default Form;
