//name => max 20char min 3char
// dificult
// duration:
// season:
//idCountries: [] => minLength = 1
const nameRegex = /^[a-zA-Z\s]{4,30}$/;
export default function formValidate(key, value) {
  let err = "";
  if (value === "") return err;

  if (key === "name") {
    err = nameRegex.test(value)
      ? ""
      : "El nombre debe tener entre 4 y 30 letras";
  } else if (key === "dificult") {
    err = value >= 1 && value <= 5 ? "" : "Ingresar dificultad entre 1 y 5";
  } else if (key === "duration") {
    err =
      value > 0 && value <= 12 ? "" : "La duración no puede exeder las 12 hs";
  } else if (key === "season") {
    err = ["Invierno", "Primavera", "Verano", "Otoño"].includes(value)
      ? ""
      : "No modificar propiedades del select";
  } else if (key === "idCountries") {
    err =
      value.length < 1
        ? "Debe asignarle esta actividad al menos a un país"
        : "";
  }

  return err;
}
