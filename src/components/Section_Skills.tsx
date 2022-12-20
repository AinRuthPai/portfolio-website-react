import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import React from "react";

const SkillsImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  margin: 10px;
`;

export const Section = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  > h1 {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const SkillsText = styled.div`
  font-size: 20px;
  margin-left: 40px;

  > p {
    line-height: 150%;
  }
`;

function SectionSkills() {
  return (
    <>
      <Section>
        <h1>Skills</h1>
        <div>
          <div>
            <SkillsImg src={process.env.PUBLIC_URL + "/img/html5.png"} className='skills_logo' alt='html5' />
            <SkillsImg src={process.env.PUBLIC_URL + "/img/css3.png"} className='skills_logo' alt='css3' />
            <SkillsImg src={process.env.PUBLIC_URL + "/img/js.png"} className='skills_logo' alt='js' />
          </div>
          <div>
            <SkillsImg src={process.env.PUBLIC_URL + "/img/react.png"} className='skills_logo' alt='react' />
            <SkillsImg src={process.env.PUBLIC_URL + "/img/redux.png"} className='skills_logo' alt='redux' />
            <SkillsImg src={process.env.PUBLIC_URL + "/img/nodejs.png"} className='skills_logo' alt='nodejs' />
          </div>
        </div>
        <SkillsText>
          <p>
            <FontAwesomeIcon icon={faCheck} className='faCheck icon' />웹 표준, 웹 접근성을 고려한 <strong>시멘틱 마크업</strong> 작업이
            가능합니다.
          </p>
          <p>
            <FontAwesomeIcon icon={faCheck} className='faCheck icon' />
            JavaScript, React를 사용하여 <strong>DOM 객체 제어</strong>가 가능합니다.
          </p>
          <p>
            <FontAwesomeIcon icon={faCheck} className='faCheck icon' />
            React Hooks를 이용한 <strong>함수형 기반</strong>의 코드를 작성합니다.
          </p>
          <p>
            <FontAwesomeIcon icon={faCheck} className='faCheck icon' />
            React-Redux를 이용하여 <strong>상태 관리</strong>가 가능합니다.
          </p>
        </SkillsText>
      </Section>
    </>
  );
}

export default SectionSkills;
