const { Router } = require("express");
const {
  get_activities,
  get_activitiesNames,
  post_createActivity,
} = require("../../handlers/activitiesHandlers");

const activitiesRouter = Router();

activitiesRouter.get("/all", get_activities);

activitiesRouter.get("/names", get_activitiesNames);

// [ ] POST /activities:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body
// Crea una actividad turística en la base de datos, relacionada con los países correspondientes
activitiesRouter.post("/", post_createActivity);

module.exports = activitiesRouter;
