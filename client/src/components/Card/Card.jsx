import { Link } from "react-router-dom";

import s from "./CardStyles.module.css";
import styled from "styled-components";

function Card({ country }) {
  return (
    <Link to={`/detail/${country.id}`} className={`${s.link}`}>
      <article className={`${s.article}`}>
        <Image flag={country.flagImg}>
          {/* <img
            src={country.flagImg}
            alt={country.name}
            className={`${s.flag}`}
          /> */}
        </Image>
        <h2 className={`${s.country}`}>{country.name}</h2>
        <p className={`${s.continent}`}>{country.continent}</p>
        <svg viewBox="0 0 28 25" className={`${s.svg}`}>
          <path
            fill="#16127f"
            d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z"
          ></path>
        </svg>
      </article>
    </Link>
  );
}

export default Card;

const Image = styled.div`
  background-image: url(${({ flag }) => flag});
  /* background-size: 100%, 200%; */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 75%;
`;
