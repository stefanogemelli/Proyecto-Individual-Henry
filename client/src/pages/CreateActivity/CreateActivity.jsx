import Form from "../../components/Form/Form";

import s from "./CreateStyles.module.css";

function CreateActivity() {
  return (
    <section className={`${s.container}`}>
      <Form />
    </section>
  );
}

export default CreateActivity;

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
