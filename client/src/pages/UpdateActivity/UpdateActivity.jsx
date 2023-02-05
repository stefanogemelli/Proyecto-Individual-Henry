import { useParams } from "react-router-dom";
import ContainerDetail from "../../components/ContainerDetail/ContainerDetail";

import { useAxios } from "../../hooks/useAxios";

import s from "./UpdateActivity.module.css";

function UpdateActivity() {
  const { idActivity } = useParams();
  const [isLoaded, data, error] = useAxios(`/activities/${idActivity}`);
  console.log(data || isLoaded);

  return (
    <ContainerDetail>
      <h1 className={s.h1}>Hola UpdateActivity</h1>
    </ContainerDetail>
  );
}

export default UpdateActivity;
