import SectionProject from "./components/Section_Project";
import SectionNav from "./components/Section_Nav";
import SectionSkills from "./components/Section_Skills";
import SectionAboutMe from "./components/Section_AboutMe";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";

const AllContents = styled.div`
  display: flex;
  width: 90%;
  margin: 3% auto;
  font-family: "Pretendard-Regular";

  @font-face {
    font-family: "Pretendard-Regular";
    src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff") format("woff");
    font-weight: 400;
    font-style: normal;
  }
`;

const MainContents = styled.div`
  width: 80%;
`;

function App() {
  return (
    <BrowserRouter>
      <AllContents>
        <SectionNav />
        <MainContents>
          <Routes>
            <Route path='/' element={<SectionProject />} />
            <Route path='/skills' element={<SectionSkills />} />
            <Route path='/aboutme' element={<SectionAboutMe />} />
          </Routes>
        </MainContents>
      </AllContents>
    </BrowserRouter>
  );
}

export default App;
