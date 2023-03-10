const { Router } = require("express");
const {
  get_countries,
  get_countriesById,
  unassign_activity,
} = require("../../handlers/countriesHandlers");

const countriesRouter = Router();

// GET /countries:
// En una primera instancia deberán traer todos los países desde restcountries y guardarlos en su propia base de datos y luego ya utilizarlos desde allí (Debe retonar sólo los datos necesarios para la ruta principal)
// Obtener un listado de los paises.

// [ ] GET /countries?name="...":
// Obtener los países que coincidan con el nombre pasado como query parameter (No necesariamente tiene que ser una matcheo exacto)
// Si no existe ningún país mostrar un mensaje adecuado
countriesRouter.get("/", get_countries);

// [ ] GET /countries/{idPais}:
// Obtener el detalle de un país en particular
// Debe traer solo los datos pedidos en la ruta de detalle de país
// Incluir los datos de las actividades turísticas correspondientes
countriesRouter.get("/:idCountry", get_countriesById);

countriesRouter.put("/unassign/:idCountry", unassign_activity);

module.exports = countriesRouter;

// Únicos Endpoints/Flags que pueden utilizar

// GET https://restcountries.com/v3/all
// GET https://restcountries.com/v3/name/{name}
// GET https://restcountries.com/v3/alpha/{code}    {code} ->  ar / pe / etc..
