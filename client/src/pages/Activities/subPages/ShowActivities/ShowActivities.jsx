import { useState } from "react";
import { useEffect } from "react";
import { getActivitiesFromApi } from "./services/getActivitiesFromApi";

import ActivityCard from "../../../../components/ActivityCard/ActivityCard";

import s from "./ShowActivities.module.css";

function ShowActivities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    !activities.length &&
      getActivitiesFromApi().then((data) => setActivities(data));
  });

  console.log(activities);
  return (
    <section className={s.container}>
      <div className={s.activitiesContainer}>
        {activities?.map((activity) => (
          <ActivityCard activity={activity} />
        ))}
      </div>
    </section>
  );
}

export default ShowActivities;
