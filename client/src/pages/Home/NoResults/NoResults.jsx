import s from "./NoResults.module.css";

function NoResults() {
  return (
    <div className={s.container}>
      <h2 className={s.h2}>No hay países que coincidan con la búsqueda</h2>
    </div>
  );
}

export default NoResults;
