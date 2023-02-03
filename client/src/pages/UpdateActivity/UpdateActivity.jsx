import { useParams } from "react-router-dom";
import s from "./UpdateActivity.module.css";

function UpdateActivity() {
  const { idActivity } = useParams();

  return <div>UpdateActivity</div>;
}

export default UpdateActivity;
