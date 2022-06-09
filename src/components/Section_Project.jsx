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
        {project.map((modalContent) => {
          return <ArticleProjectModal modalContent={modalContent} key={modalContent.id} />;
        })}
      </article>
    </section>
  );
}

export default SectionProject;
