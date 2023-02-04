import CreateActivity from "./subPages/CreateActivity/CreateActivity";
import NavBar from "./components/NavBar/NavBar";

import { useState } from "react";

import s from "./Activities.module.css";
import ShowActivities from "./subPages/ShowActivities/ShowActivities";

const switchPage = {
  "Ver Actividades": (() => <ShowActivities />)(),
  "Crear Actividad": (() => <CreateActivity />)(),
};

function Activities() {
  const [page, setPage] = useState("Crear Actividad");

  return (
    <div className={s.container}>
      <NavBar page={page} setPage={setPage} />
      {switchPage[page]}
    </div>
  );
}

export default Activities;
