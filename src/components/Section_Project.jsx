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
        <ArticleProject project={project[0]} />
        <ArticleProject project={project[1]} />
      </article>

      <article className='project_container2'>
        <ArticleProject project={project[2]} />
        <ArticleProject project={project[3]} />
      </article>

      <article className='project_container3'>
        <ArticleProject project={project[4]} />
        <ArticleProject project={project[5]} />
      </article>
    </section>
  );
}

export default SectionProject;
