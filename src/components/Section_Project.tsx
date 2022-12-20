import ArticleProjectModal from "./Article_Project_Modal";
import projectData from "../db/ProjectData";
import styled from "styled-components";
import React from "react";

const GridModal = styled.div`
  margin-left: 3%;
  margin-top: 2%;
  display: grid;
  grid-template-columns: repeat(2, 45%);
  grid-row-gap: 10%;
  grid-column-gap: 10%;
  justify-content: center;
  align-items: center;
`;

function SectionProject() {
  const project = projectData;

  return (
    <>
      <h1>Project</h1>
      <GridModal>
        {project.map((modalContent: any) => {
          return <ArticleProjectModal modalContent={modalContent} key={modalContent.id} />;
        })}
      </GridModal>
    </>
  );
}

export default SectionProject;
