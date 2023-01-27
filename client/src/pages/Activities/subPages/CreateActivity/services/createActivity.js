export const createActivity = async (payload) => {
  const data = await fetch("http://localhost:3001/activities", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((data) => data.json());
  return data;
};
