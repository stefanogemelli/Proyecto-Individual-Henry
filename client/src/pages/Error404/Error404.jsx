import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Error404() {
  const [show, setShow] = useState(false);
  const { push } = useHistory();

  useEffect(() => {
    setShow(true);
  }, []);

  const handleClose = () => {
    setShow(false);
    push("/home");
  };

  return (
    <div className={`not-found-modal ${show ? "show" : ""}`}>
      <div className="not-found-header">
        <h2>404 Error</h2>
      </div>
      <div className="not-found-body">
        <p>Lo sentimos, la página a la que intentas acceder no existe.</p>
      </div>
      <div className="not-found-footer">
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
}
export default Error404;
