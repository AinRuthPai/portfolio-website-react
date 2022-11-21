import { useState, useEffect } from "react";
import SectionFooter from "./Section_Footer";
import SectionProject from "./Section_Project";
import SectionHeader from "./Section_Header";
import SectionSkills from "./Section_Skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCardClip, faSortDown, faPen, faEnvelope, faPerson, faCakeCandles } from "@fortawesome/free-solid-svg-icons";
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
          <a href='https://github.com/AinRuthPai' target='_blank' rel='noopener noreferrer'>
            GITHUB
          </a>
          <a href='https://velog.io/@ainruthpai' target='_blank' rel='noopener noreferrer'>
            VELOG
          </a>
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

      <SectionSkills />

      <SectionProject />

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
