import ActivityCard from "../ActivityCard/ActivityCard";

import s from "./styles.module.css";

function CountryDetailActivities({ activities, name }) {
  console.log(activities);
  return (
    <div className={s.container}>
      <h2 className={s.h2}>{`Actividades de ${name}`}</h2>
      <hr className={s.hr} />
      <div className={s.cardsContainer}>
        {/* aca va un loader */}

        {activities?.map((activity) => (
          <ActivityCard activity={activity} />
        ))}
      </div>
    </div>
  );
}

export default CountryDetailActivities;
