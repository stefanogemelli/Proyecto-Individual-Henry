import { useParams } from "react-router-dom";

import { useAxiosGet } from "../../hooks/useAxiosGet";

import s from "./UpdateActivity.module.css";

function UpdateActivity() {
  const { idActivity } = useParams();
  const [isLoading, data, error] = useAxiosGet(
    `http://localhost:3001/activities/${idActivity}`
  );
  console.log(data || isLoading);

  return <div>UpdateActivity</div>;
}

export default UpdateActivity;
