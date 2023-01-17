const { Router } = require("express");
const { createActivity } = require("../../controllers");

const activitiesRouter = Router();

// [ ] POST /activities:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body
// Crea una actividad turística en la base de datos, relacionada con los países correspondientes
activitiesRouter.post("/", async (req, res) => {
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
      status: "La actividad fue creada correctamente",
      activity: newActivity,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = activitiesRouter;
