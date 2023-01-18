const { default: axios } = require("axios");
const { Country, Activity } = require("../db");
const { Op } = require("sequelize");

const setCountriesDB = ({
  id,
  name,
  flagImg,
  continent,
  capital,
  subregion,
  area,
  population,
}) => {
  if (id && name && flagImg && continent && capital)
    return Country.create({
      id,
      name,
      flagImg,
      continent,
      capital,
      subregion,
      area,
      population,
    });
};

const getCountriesFromApi = async () => {
  const { data } = await axios.get("https://restcountries.com/v3/all");
  data.map((c) => {
    setCountriesDB({
      id: c.cca3,
      name: c.name?.common, //  if(c.name) c.name.common
      flagImg: c.flags[0],
      continent: c.continents[0],
      capital: c.capital?.[0],
      subregion: c.subregion,
      area: c.area,
      population: c.population,
    });
  });
};

const getCountries = async () => {
  const listCountries = await Country.findAll();
  return listCountries;
};

const getCountriesByName = async (name) => {
  const countries = await Country.findAll({
    where: {
      name: { [Op.iLike]: `%${name}%` },
    },
  });
  if (countries.length) return countries;
  throw new Error("No se encontraron coincidencias");
};

const getCountryById = async (idCountry) => {
  const countryAndActivities = await Country.findByPk(idCountry, {
    include: [
      {
        model: Activity,
        // attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    ],
  });
  return countryAndActivities; //const newRessult = [{name, id, data, estonova} ].map(c=>{c.name , c.id, c.data})
};

const createActivity = async (
  name,
  dificult,
  duration,
  season,
  idCountries
) => {
  if (!name || !dificult || !duration || !season || !idCountries)
    throw Error("Faltan datos para la creación de la actividad");
  const newActivity = await Activity.create({
    name,
    dificult,
    duration,
    season,
  });
  await newActivity.setCountries(idCountries);
  return newActivity;
};

module.exports = {
  getCountriesFromApi,
  getCountries,
  getCountriesByName,
  getCountryById,
  createActivity,
};
