export const getCountriesByName = async (name) => {
  try {
    const res = await fetch(`http://localhost:3001/countries?name=${name}`);
    return res.json();
  } catch (error) {
    return [];
  }
};
