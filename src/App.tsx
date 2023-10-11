import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import SectionProject from './components/Section_Project';
import SectionNav from './components/Section_Nav';
import SectionSkills from './components/Section_Skills';
import SectionAboutMe from './components/Section_AboutMe';

export default function App() {
    return (
        <BrowserRouter>
            <AllContents>
                <SectionNav />
                <MainContents>
                    <Routes>
                        <Route path="/portfolio-website-react" element={<SectionProject />} />
                        <Route path="/portfolio-website-react/skills" element={<SectionSkills />} />
                        <Route path="/portfolio-website-react/aboutme" element={<SectionAboutMe />} />
                    </Routes>
                </MainContents>
            </AllContents>
        </BrowserRouter>
    );
}

const AllContents = styled.div`
    display: flex;
    width: 95%;
    height: 95%;
    margin: 0 auto;
    font-family: 'Pretendard-Regular';

    @font-face {
        font-family: 'Pretendard-Regular';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
    }

    @media screen and (max-width: 1024px) {
        width: 100%;
        height: 100%;
        flex-direction: column;
        margin-bottom: 20px;
    }
`;

const MainContents = styled.div`
    width: 80%;
    height: 100%;
    margin-top: 40px;

    @media screen and (max-width: 1024px) {
        margin: 0 auto;
        text-align: center;
    }
`;
