import { useState, useEffect } from "react";
import SectionFooter from "./Section_Footer";
import SectionProject from "./Section_Project";
import SectionHeader from "./Section_Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faIdCardClip, faCheck, faSortDown } from "@fortawesome/free-solid-svg-icons";
import Typist from "react-typist";

function Container() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(1);
  }, [count]);

  return (
    <div className='mainpage'>
      <SectionHeader />

      <a href='#0' className='moveTop'>
        TOP
      </a>

      <section className='mainSection' id='0'>
        <div>
          <p className='mainTitle'>WELCOME !</p>
          {count ? (
            <Typist avgTypingDelay={100} stdTypingDelay={10} onTypingDone={() => setCount(0)}>
              <span>Frontend Developer</span>
              <Typist.Backspace count={20} delay={100} />
              <span>Hoon's Portfolio!</span>
              <Typist.Backspace count={20} delay={100} />
            </Typist>
          ) : (
            ""
          )}
        </div>
        <a href='#1'>
          <FontAwesomeIcon icon={faSortDown} className='faSortDown icon' />
        </a>
      </section>

      {/* About me */}
      <section className='section about_me' id='1'>
        <p>
          <FontAwesomeIcon icon={faIdCardClip} className='faIdCardClip icon' />
          ABOUT ME
        </p>
        <div className='row'>
          <div className='col-md-6'>
            <p>이름</p>
            <p>백훈찬</p>
          </div>
          <div className='col-md-6'>
            <p>생년월일</p>
            <p>93.02.03 / 30</p>
          </div>
          <div className='col-md-6'>
            <p>이메일</p>
            <p>tanbing@naver.com</p>
          </div>
          <div className='col-md-6'>
            <p>학력</p>
            <p>수원과학대 컴퓨터정보학과</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className='section skills' id='2'>
        <p>
          <FontAwesomeIcon icon={faCode} className='faCode icon' />
          SKILLS
        </p>
        <div className='skills_container'>
          <div>
            <div className='skills_icon_box'>
              <img src={process.env.PUBLIC_URL + "/img/html5.png"} className='skills_logo' alt='html5' />
              <img src={process.env.PUBLIC_URL + "/img/css3.png"} className='skills_logo' alt='css3' />
              <img src={process.env.PUBLIC_URL + "/img/js.png"} className='skills_logo' alt='js' />
            </div>
            <div className='skills_icon_box2'>
              <img src={process.env.PUBLIC_URL + "/img/react.png"} className='skills_logo' alt='react' />
              <img src={process.env.PUBLIC_URL + "/img/redux.png"} className='skills_logo' alt='redux' />
              <img src={process.env.PUBLIC_URL + "/img/nodejs.png"} className='skills_logo' alt='nodejs' />
            </div>
          </div>
          <div className='skills_text'>
            <ul>
              <FontAwesomeIcon icon={faCheck} className='faCheck icon' />
              <p>웹 표준, 웹 접근성</p> 을 고려한 시멘틱 마크업 작업이 가능합니다.
            </ul>
            <ul>
              <FontAwesomeIcon icon={faCheck} className='faCheck icon' />
              CSS Media Query를 사용하여 <p>반응형 웹</p> 제작이 가능합니다.
            </ul>
            <ul>
              <FontAwesomeIcon icon={faCheck} className='faCheck icon' />
              JavaScript, React를 사용하여 <p>DOM 객체 제어</p>가 가능합니다.
            </ul>
            <ul>
              <FontAwesomeIcon icon={faCheck} className='faCheck icon' />
              Redux를 이용하여 <p>상태 관리</p>가 가능합니다.
            </ul>
          </div>
        </div>
      </section>
      <SectionProject />
      <SectionFooter />
    </div>
  );
}

export default Container;
