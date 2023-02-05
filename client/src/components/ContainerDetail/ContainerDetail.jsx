import s from "./ContainerDetail.module.css";

function ContainerDetail({ children }) {
  return (
    <div className={s.container}>
      <div className={s.bg}></div>
      {children}
    </div>
  );
}

export default ContainerDetail;
