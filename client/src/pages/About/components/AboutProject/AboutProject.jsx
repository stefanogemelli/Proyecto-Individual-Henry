import s from "./AboutProject.module.css";

function AboutProject() {
  return (
    <section className={s.container}>
      <h2 className={s.h2}>Descripción</h2>
      <hr className={s.hr} />
      <div className={s.bgText}>
        <p className={s.text}>
          Es una single page application CRUD, sobre paises y actividades
          turísticas. Cuenta con la posibilidad de crear, asignar, actualizar y
          eliminar actividades, visitar una pagina detallada de los países en la
          cual se pueden visualizar las actividades que le corresponden, así
          como también desasignar actividades. Los paises en la pagina principal
          cuentan con una paginación y una barra lateral que permite realizar
          busquedas, filtros combinados y ordenamientos.
        </p>
      </div>
      <h2 className={s.h2}>Tecnologías utilizadas</h2>
      <hr className={s.hr} />
      <div className={s.bgIcons}>
        <div className={s.divIcon}>
          <i className={`${s.html5} ${s.allIcons}`}></i>
          <p>HTML5</p>
        </div>
        <div className={s.divIcon}>
          <i className={`${s.css3} ${s.allIcons}`}></i>
          <p>CSS3</p>
        </div>
        <div className={s.divIcon}>
          <i className={`${s.js} ${s.allIcons}`}></i>
          <p>JavaScript</p>
        </div>
        <div className={s.divIcon}>
          <i className={`${s.react} ${s.allIcons}`}></i>
          <p>React</p>
        </div>
        <div className={s.divIcon}>
          <i className={`${s.redux} ${s.allIcons}`}></i>
          <p>Redux</p>
        </div>
        <div className={s.divIcon}>
          <i className={`${s.reactRouter} ${s.allIcons}`}></i>
          <p>React-router</p>
        </div>
        <div className={s.divIcon}>
          <i className={`${s.postgreSQL} ${s.allIcons}`}></i>
          <p>PostgreSQL</p>
        </div>
        <div className={s.divIcon}>
          <i className={`${s.git} ${s.allIcons}`}></i>
          <p>Git</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
