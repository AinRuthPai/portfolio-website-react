import SectionProject from "./components/Section_Project";
import SectionNav from "./components/Section_Nav";
import SectionSkills from "./components/Section_Skills";
import SectionAboutMe from "./components/Section_AboutMe";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import React from "react";

const AllContents = styled.div`
  display: flex;
  width: 95%;
  height: 90vh;
  margin: 0 auto;
  font-family: "Pretendard-Regular";

  @font-face {
    font-family: "Pretendard-Regular";
    src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff") format("woff");
    font-weight: 400;
    font-style: normal;
  }

  /* > .ReactModal__Body--open,
  .ReactModal__Html--open {
    overflow: hidden;
  }

  > .ReactModal__Overlay {
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.2s ease;
    width: 100%;
    height: 100%;
    margin: auto;
    z-index: 99;
    overflow: auto;
  }

  > .ReactModal__Content {
    font-family: "Pretendard-Regular";
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    box-shadow: 4px 4px 6px 4px #dadce0;
  }

  > .ReactModal__Overlay--after-open {
    opacity: 1;
  }

  > .ReactModal__Overlay--before-close {
    opacity: 0;
  } */
`;

const MainContents = styled.div`
  width: 80%;
  height: 100%;
`;

function App() {
  return (
    <BrowserRouter>
      <AllContents>
        <SectionNav />
        <MainContents>
          <Routes>
            <Route path='/portfolio-website-react' element={<SectionProject />} />
            <Route path='/portfolio-website-react/skills' element={<SectionSkills />} />
            <Route path='/portfolio-website-react/aboutme' element={<SectionAboutMe />} />
          </Routes>
        </MainContents>
      </AllContents>
    </BrowserRouter>
  );
}

export default App;
