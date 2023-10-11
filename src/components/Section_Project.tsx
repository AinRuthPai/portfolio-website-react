import styled from 'styled-components';
import projectData from '../db/ProjectData';
import ArticleProjectModal from './Article_Project_Modal';

export interface Data {
    id: number;
    title: string;
    stack: Array<string>;
    content: string;
    date: string;
    img: Array<string>;
    link: string;
}

export default function SectionProject() {
    const project = projectData;

    return (
        <>
            <h3>Project</h3>
            <GridModal>
                {project.map((modalContent: Data) => {
                    return <ArticleProjectModal modalContent={modalContent} key={modalContent.id} />;
                })}
            </GridModal>
        </>
    );
}

const GridModal = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 45%);
    grid-row-gap: 10%;
    grid-column-gap: 10%;
    justify-content: center;
    align-items: center;
    margin-left: 3%;
    margin-top: 2%;

    @media screen and (max-width: 1024px) {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
    }
`;
