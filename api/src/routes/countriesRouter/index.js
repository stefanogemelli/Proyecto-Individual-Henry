const { Router } = require("express");
const {
  getCountriesFromApi,
  getCountries,
  getCountriesByName,
  getCountryById,
} = require("../../controllers");

const countriesRouter = Router();

// GET /countries:
// En una primera instancia deberán traer todos los países desde restcountries y guardarlos en su propia base de datos y luego ya utilizarlos desde allí (Debe retonar sólo los datos necesarios para la ruta principal)
// Obtener un listado de los paises.

getCountriesFromApi();

// [ ] GET /countries?name="...":
// Obtener los países que coincidan con el nombre pasado como query parameter (No necesariamente tiene que ser una matcheo exacto)
// Si no existe ningún país mostrar un mensaje adecuado
countriesRouter.get("/", async (req, res) => {
  const { name } = req.query;
  if (name) {
    try {
      const result = await getCountriesByName(name);
      res.status(200).json(result);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  } else {
    try {
      res.status(200).json(await getCountries());
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
});

// [ ] GET /countries/{idPais}:
// Obtener el detalle de un país en particular
// Debe traer solo los datos pedidos en la ruta de detalle de país
// Incluir los datos de las actividades turísticas correspondientes
countriesRouter.get("/:idCountry", async (req, res) => {
  const { idCountry } = req.params;
  try {
    res.status(200).json(await getCountryById(idCountry));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = countriesRouter;

// Únicos Endpoints/Flags que pueden utilizar

// GET https://restcountries.com/v3/all
// GET https://restcountries.com/v3/name/{name}
// GET https://restcountries.com/v3/alpha/{code}    {code} ->  ar / pe / etc..
