const { Router } = require("express");
const {
  get_activities,
  get_activitiesNames,
  post_createActivity,
  delete_deleteActivity,
  update_deleteActivity,
  get_activitiyById,
} = require("../../handlers/activitiesHandlers");

const activitiesRouter = Router();

activitiesRouter.get("/all", get_activities);

activitiesRouter.get("/names", get_activitiesNames);

activitiesRouter.get("/:id", get_activitiyById);

activitiesRouter.delete("/:id", delete_deleteActivity);

activitiesRouter.put("/update/:id", update_deleteActivity);

activitiesRouter.post("/", post_createActivity);

module.exports = activitiesRouter;
