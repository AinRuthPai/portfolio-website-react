import ArticleProjectModal from "./Article_Project_Modal";
import projectData from "../ProjectData.js";
import styled from "styled-components";

const GridModal = styled.div`
  margin-left: 50px;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-row-gap: 5%;
  grid-column-gap: 5%;
  justify-content: center;
  align-items: center;
`;

function SectionProject() {
  const project = projectData;

  return (
    <>
      <h1>Project</h1>
      <GridModal>
        {project.map((modalContent) => {
          return <ArticleProjectModal modalContent={modalContent} key={modalContent.id} />;
        })}
      </GridModal>
    </>
  );
}

export default SectionProject;
