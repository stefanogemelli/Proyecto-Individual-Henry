import { Link } from "react-router-dom";

import s from "./LandingStyles.module.css";
import BGLanding from "../../assets/videos/BGGolden.mp4";

function Landing() {
  const handleClick = () => {};
  return (
    <>
      <section className={`${s.container}`}>
        <h1 className={`${s.h1} ${s.slideH1}`}>
          Proyecto Individual Countries
        </h1>
        <Link to="/home">
          <button className={`${s.button} ${s.slideBtn}`} onClick={handleClick}>
            <span className={`${s.span_text}`}>
              Comenzar
              <span className={`${s.button_bg1}`}></span>
            </span>
          </button>
        </Link>
        <video className={`${s.video}`} autoPlay loop muted>
          <source src={BGLanding} type="video/mp4" />
        </video>
        <div className={`${s.capa1}`}></div>
        {/* <div className={`${s.capa2}`}></div> */}
      </section>
    </>
  );
}

export default Landing;
