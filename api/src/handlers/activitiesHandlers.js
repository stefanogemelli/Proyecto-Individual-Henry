const {
  getActivities,
  createActivity,
  getActivityNames,
  updateActivity,
  deleteActivity,
} = require("../controllers");

const get_activities = async (req, res) => {
  try {
    const result = await getActivities();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const get_activitiesNames = async (req, res) => {
  try {
    const result = await getActivityNames();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const post_createActivity = async (req, res) => {
  const { name, dificult, duration, season, idCountries } = req.body;
  try {
    const newActivity = await createActivity(
      name,
      dificult,
      duration,
      season,
      idCountries
    );
    res.status(201).json({
      message: "La actividad fue creada correctamente",
      activity: newActivity,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const update_deleteActivity = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  try {
    res.status(200).json(await updateActivity(id, body));
  } catch (error) {}
};

const delete_deleteActivity = async (req, res) => {
  const { id } = req.params;
  try {
    res.status(200).json(await deleteActivity(id));
  } catch (error) {}
};

module.exports = {
  get_activities,
  get_activitiesNames,
  post_createActivity,
  delete_deleteActivity,
  update_deleteActivity,
};
