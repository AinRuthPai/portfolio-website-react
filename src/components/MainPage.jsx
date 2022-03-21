import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faIdCardClip, faCheck } from "@fortawesome/free-solid-svg-icons";
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
          ⮟
        </Link>
      </section>

      {/* About me */}
      <div className='section about_me' id='1'>
        <h2>
          <FontAwesomeIcon icon={faIdCardClip} className='faIdCardClip icon' />
          ABOUT ME
        </h2>
        <div className='row'>
          <div className='col-md-6'>
            <h4>이름</h4>
            <p>1</p>
          </div>
          <div className='col-md-6'>
            <h4>생년월일</h4>
            <p>2</p>
          </div>
          <div className='col-md-6'>
            <h4>이메일</h4>
            <p>5</p>
          </div>
          <div className='col-md-6'>
            <h4>학력</h4>
            <p>6</p>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className='section skills' id='2'>
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
              <img src='https://nawskcalb.com/image/skills/nodejs.png' className='skills_logo' alt='img' />
            </div>
          </div>
          <div className='skills_text'>
            <ul>
              <FontAwesomeIcon icon={faCheck} className='faCheck icon' />
              aaaaaaaaaaaaaaaaaaaaa
            </ul>
            <ul>
              <FontAwesomeIcon icon={faCheck} className='faCheck icon' />
              bbbbbbbbbbbbbbbbbbbbb
            </ul>
            <ul>
              <FontAwesomeIcon icon={faCheck} className='faCheck icon' />
              ccccccccccccccccccccc
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
