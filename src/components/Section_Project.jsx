import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import ArticleProjectModal from "./Article_Project_Modal";
import projectData from "../ProjectData.js";

function SectionProject() {
  const project = projectData;

  return (
    <section className='section project' id='3'>
      <h1>
        <FontAwesomeIcon icon={faPen} className='faPen icon' />
        PROJECT
      </h1>
      <article className='project_container'>
        {project.map((array, i) => {
          return <ArticleProjectModal project={project[i]} i={i} key={i} />;
        })}
      </article>
    </section>
  );
}

export default SectionProject;
