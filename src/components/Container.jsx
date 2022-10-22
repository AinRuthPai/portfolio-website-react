import { useState, useEffect } from "react";
import SectionFooter from "./Section_Footer";
import SectionProject from "./Section_Project";
import SectionHeader from "./Section_Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faIdCardClip, faCheck, faSortDown, faPen, faEnvelope, faPerson, faCakeCandles } from "@fortawesome/free-solid-svg-icons";
import Typist from "react-typist";

function Container() {
  const [count, setCount] = useState(true);

  useEffect(() => {
    setCount(true);
  }, [count]);

  return (
    <main className='mainpage'>
      <SectionHeader />

      <a href='#0' className='moveTop'>
        TOP
      </a>

      <section className='mainSection' id='0'>
        <div className='website_link'>
          <p>
            <a href='https://github.com/AinRuthPai' target='_blank' rel='noopener noreferrer'>
              GITHUB
            </a>
          </p>
          <p>
            <a href='https://velog.io/@ainruthpai' target='_blank' rel='noopener noreferrer'>
              VELOG
            </a>
          </p>
        </div>
        <div>
          <p className='mainTitle'>WELCOME !</p>
          {count ? (
            <Typist avgTypingDelay={100} stdTypingDelay={10} onTypingDone={() => setCount(false)}>
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

      <SectionProject />

      {/* Skills */}
      <section className='section skills' id='2'>
        <h1>
          <FontAwesomeIcon icon={faCode} className='faCode icon' />
          SKILLS
        </h1>
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
            <p>
              <FontAwesomeIcon icon={faCheck} className='faCheck icon' />웹 표준, 웹 접근성을 고려한 <strong>시멘틱 마크업</strong> 작업이
              가능합니다.
            </p>
            <p>
              <FontAwesomeIcon icon={faCheck} className='faCheck icon' />
              CSS Media Query를 사용하여 <strong>반응형 웹</strong> 제작이 가능합니다.
            </p>
            <p>
              <FontAwesomeIcon icon={faCheck} className='faCheck icon' />
              JavaScript, React를 사용하여 <strong>DOM 객체 제어</strong>가 가능합니다.
            </p>
            <p>
              <FontAwesomeIcon icon={faCheck} className='faCheck icon' />
              Redux를 이용하여 <strong>상태 관리</strong>가 가능합니다.
            </p>
          </div>
        </div>
      </section>

      {/* About me */}
      <section className='section about_me' id='3'>
        <h1>
          <FontAwesomeIcon icon={faIdCardClip} className='faIdCardClip icon' />
          INFOMATION
        </h1>
        <div className='row'>
          <div className='col-md-6'>
            <p>
              <FontAwesomeIcon icon={faPerson} className='faPerson icon' />
            </p>
            <p>
              신입 프론트엔드 개발자 <strong>백훈찬</strong>입니다.
            </p>
          </div>
          <div className='col-md-6'>
            <p>
              <FontAwesomeIcon icon={faCakeCandles} className='faCakeCandles icon' />
            </p>
            <p>93.02.03 / 30살 입니다.</p>
          </div>
          <div className='col-md-6'>
            <p>
              <FontAwesomeIcon icon={faEnvelope} className='faEnvelope icon' />
            </p>
            <p>untitle0203@gmail.com</p>
          </div>
          <div className='col-md-6'>
            <p>
              <FontAwesomeIcon icon={faPen} className='faPen icon' />
            </p>
            <p>수원과학대 컴퓨터정보학과</p>
          </div>
        </div>
      </section>
      <SectionFooter />
    </main>
  );
}
export default Container;
