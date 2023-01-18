export const CREATE_ACTIVITY = "CREATE_ACTIVITY";

export const createActivity = (data) => {
  return {
    type: CREATE_ACTIVITY,
    payload: data,
  };
};
