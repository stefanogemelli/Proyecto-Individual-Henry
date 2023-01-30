import { useState } from "react";

import NavBar from "./components/NavBar/NavBar";
import AboutProject from "./components/AboutProject/AboutProject";
import AboutMe from "./components/AboutMe/AboutMe";

import s from "./About.module.css";

function About() {
  const [page, setPage] = useState("project");
  return (
    <div className={s.container}>
      <NavBar page={page} setPage={setPage} />
      <section className={s.pageContainer}>
        {page === "project" ? <AboutProject /> : <AboutMe />}
      </section>
    </div>
  );
}

export default About;
