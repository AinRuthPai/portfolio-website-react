import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faIdCardClip, faCheck, faSortDown } from "@fortawesome/free-solid-svg-icons";
import Typist from "react-typist";
import { Link } from "react-scroll";

function MainPage() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(1);
  }, [count]);

  const cursor = {
    show: true,
    blink: true,
    element: "|",
    hideWhenDone: true,
    hideWhenDoneDelay: 10,
  };

  return (
    <div className='mainpage'>
      <Link to='0' className='moveTop'>
        TOP
      </Link>
      <section className='mainSection' id='0'>
        <div>
          <p className='mainTitle'>WELCOME !</p>
          {count ? (
            <Typist avgTypingDelay={100} stdTypingDelay={10} cursor={cursor} onTypingDone={() => setCount(0)}>
              <span>Frontend Developer</span>
              <Typist.Backspace count={20} delay={100} />
              <span>Hoon's Portfolio!</span>
              <Typist.Backspace count={20} delay={100} />
            </Typist>
          ) : (
            ""
          )}
        </div>
        <Link to='1' className='arrow'>
          <FontAwesomeIcon icon={faSortDown} className='faSortDown icon' />
        </Link>
      </section>

      {/* About me */}
      <section className='section about_me' id='1'>
        <h2>
          <FontAwesomeIcon icon={faIdCardClip} className='faIdCardClip icon' />
          ABOUT ME
        </h2>
        <div className='row'>
          <div className='col-md-6'>
            <h4>이름</h4>
            <p>백훈찬</p>
          </div>
          <div className='col-md-6'>
            <h4>생년월일</h4>
            <p>93.02.03 / 30</p>
          </div>
          <div className='col-md-6'>
            <h4>이메일</h4>
            <p>5</p>
          </div>
          <div className='col-md-6'>
            <h4>학력</h4>
            <p>수원과학대 컴퓨터정보학과</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className='section skills' id='2'>
        <h2>
          <FontAwesomeIcon icon={faCode} className='faCode icon' />
          SKILLS
        </h2>
        <div className='skills_container'>
          <div>
            <div className='skills_icon_box'>
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png'
                className='skills_logo'
                alt='img'
              />
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png'
                className='skills_logo'
                alt='img'
              />
              <img src='https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png' className='skills_logo' alt='img' />
            </div>
            <div className='skills_icon_box2'>
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png'
                className='skills_logo'
                alt='img'
              />
              <img src='http://assets.stickpng.com/images/5848309bcef1014c0b5e4a9a.png' className='skills_logo' alt='img' />
              <img src='https://nawskcalb.com/image/skills/nodejs.png' className='skills_logo' alt='img' />
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
            <ul>
              <FontAwesomeIcon icon={faCheck} className='faCheck icon' />
              소소하지만 꾸준함을 증명하기 위해 <p>Github 1일 1 commit</p>을 시행중입니다.
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainPage;
