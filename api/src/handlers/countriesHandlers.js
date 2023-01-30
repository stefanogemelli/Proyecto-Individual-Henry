const {
  getCountries,
  getCountriesByName,
  getCountryById,
} = require("../controllers");

const get_countries = async (req, res) => {
  const { name } = req.query;
  if (name) {
    try {
      const result = await getCountriesByName(name);
      res.status(200).json(result);
    } catch (error) {
      res.status(404).send(error.message);
    }
  } else {
    try {
      res.status(200).json(await getCountries());
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
};

const get_countriesById = async (req, res) => {
  const { idCountry } = req.params;
  try {
    let result = await getCountryById(idCountry);
    res.status(200).json(result);
  } catch (error) {
    res.status(204).json({ error: error.message });
  }
};
module.exports = { get_countries, get_countriesById };
