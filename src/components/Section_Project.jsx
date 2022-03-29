import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import ArticleProject from "./Article_Project";
import ProjectData from "../ProjectData.js";

function SectionProject(props) {
  const project = ProjectData;

  return (
    <section className='section project' id='3'>
      <h2>
        <FontAwesomeIcon icon={faPen} className='faPen icon' />
        PROJECT
      </h2>
      <article className='project_container'>
        {project.map((array, i) => {
          return <ArticleProject project={project[i]} i={i} key={i} />;
        })}
      </article>
    </section>
  );
}

export default SectionProject;
