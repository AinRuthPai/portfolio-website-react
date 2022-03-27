import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import "./Project.scss";
import "../App.scss";
import Card from "./Card";
import Data from "../Data.js";

function Project(props) {
  const [project, setProject] = useState(Data);

  return (
    <section className='section project' id='3'>
      <h2>
        <FontAwesomeIcon icon={faPen} className='faPen icon' />
        PROJECT
      </h2>
      <article className='project_container'>
        <Card project={project[0]} />
        <Card project={project[1]} />
      </article>

      <article className='project_container2'>
        <Card project={project[2]} />
        <Card project={project[3]} />
      </article>

      <article className='project_container3'>
        <Card project={project[4]} />
        <Card project={project[5]} />
      </article>
    </section>
  );
}

export default Project;
