import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import ArticleProjectModal from "./Article_Project_Modal";
import ProjectData from "../ProjectData.js";

function SectionProject(props) {
  const project = ProjectData;

  return (
    <section className='section project' id='3'>
      <p>
        <FontAwesomeIcon icon={faPen} className='faPen icon' />
        PROJECT
      </p>
      <article className='project_container'>
        {project.map((array, i) => {
          return <ArticleProjectModal project={project[i]} i={i} key={i} />;
        })}
      </article>
    </section>
  );
}

export default SectionProject;
