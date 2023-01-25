export const getActivityNames = async () => {
  const data = await fetch(`http://localhost:3001/activities/names`).then(
    (data) => data.json()
  );
  return data;
};
