import { useState } from "react";
import s from "./CreateStyles.module.css";
function Create() {
  const [inputs, setInputs] = useState({
    name: "",
    dificult: "",
    duration: "",
    season: "",
    idCountries: [],
  });

  const handleChange = (e) => {
    console.log(inputs);
    if (e.target.name === "idCountries") {
      setInputs({ ...inputs, [e.target.name]: [e.target.value] });
    } else {
      setInputs({ ...inputs, [e.target.name]: e.target.value });
    }
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
    console.log(data);
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit} className={`${s.form}`}>
        <label className={`${s.label}`}>
          Insert data to create the activity
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
        <input
          onChange={handleChange}
          className={`${s.input}`}
          type="text"
          name="idCountries"
          value={inputs.idCountries}
        />
        <button type="submit">aaaaaaaaa</button>
      </form>
    </>
  );
}

export default Create;

// {
// 	"name": "Ligoleye",
// 	"dificult":2,
// 	"duration": "toda la vida",
// 	"season":"Verano",
// 	"idCountries":[
// 		"ARG",
// 		"POL"
// 	]
// }
