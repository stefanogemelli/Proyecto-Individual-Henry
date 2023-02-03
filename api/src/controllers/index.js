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
  console.log(name);
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
  try {
    const { data } = await axios.get("https://restcountries.com/v3/all");
    data.map((c) => {
      setCountriesDB({
        id: c.cca3,
        name: c.name?.common,
        flagImg: c.flags[0],
        continent: c.continents[0],
        capital: c.capital?.[0],
        subregion: c.subregion,
        area: c.area,
        population: c.population,
      });
    });
  } catch (error) {
    console.log(error.message);
  }
};
// getCountriesFromApi();

const getCountries = async () => {
  const listCountries = await Country.findAll({
    attributes: ["id", "name", "continent", "flagImg", "population"],
    include: [
      {
        model: Activity,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    ],
  });
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
        through: {
          attributes: [],
        },
      },
    ],
  });
  return countryAndActivities;
};

const getActivityNames = async () => {
  try {
    activitiesList = await Activity.findAll({
      attributes: ["name"],
    });
  } catch (error) {
    console.log(error);
  }
  return activitiesList;
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

const getActivities = async () => {
  const listActivities = await Activity.findAll();
  return listActivities;
};

const getActivityById = async (id) => {
  const activity = await Activity.findByPk(id);
  return activity;
};

const updateActivity = async (id, body) => {
  const [result] = await Activity.update(body, {
    where: { id: id },
  });

  return result === 1
    ? "Actualización exitosa"
    : "Hubo un fallo en la actualización";
};

const deleteActivity = async (id) => {
  const activity = await Activity.findByPk(id);
  await activity.destroy();
  return { message: "Actividad eliminada con éxito" };
};

const unassignActivity = async (idCountry, idActivity) => {
  const country = await Country.findByPk(idCountry);
  await country.removeActivity(idActivity);
  return { message: "Actividad eliminada con éxito" };
};

module.exports = {
  getCountriesFromApi,
  getCountries,
  getCountriesByName,
  getCountryById,
  createActivity,
  getActivities,
  getActivityNames,
  updateActivity,
  deleteActivity,
  unassignActivity,
  getActivityById,
};
