import ArticleProjectModal from "./Article_Project_Modal";
import projectData from "../ProjectData.js";
import styled from "styled-components";

const GridModal = styled.div`
  margin-left: 50px;
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-row-gap: 10%;
  grid-column-gap: 10%;
  justify-content: center;
  align-items: center;
`;

function SectionProject() {
  const project = projectData;

  return (
    <section className='section project'>
      <GridModal>
        {project.map((modalContent) => {
          return <ArticleProjectModal modalContent={modalContent} key={modalContent.id} />;
        })}
      </GridModal>
    </section>
  );
}

export default SectionProject;
