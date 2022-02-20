import { Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faCode, faIdCardClip } from "@fortawesome/free-solid-svg-icons";
import { faHtml5, faCss3, faJs, faReact, faGithub } from "@fortawesome/free-brands-svg-icons";

function MainPage() {
  const aboutMeTitle = ["이름", "생년월일", "주소", "연락처", "이메일", "학력"];

  return (
    <>
      <Carousel variant='dark'>
        <Carousel.Item>
          <img
            style={{ height: "600px", objectFit: "contain" }}
            className='d-block w-100'
            src='https://ifh.cc/g/xvk0LG.jpg'
            alt='First slide'
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            style={{ height: "600px", objectFit: "contain" }}
            className='d-block w-100'
            src='https://ifh.cc/g/s8L0fh.jpg'
            alt='Second slide'
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            style={{ height: "600px", objectFit: "contain" }}
            className='d-block w-100'
            src='https://ifh.cc/g/STXIKN.jpg'
            alt='Third slide'
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* About me */}
      <div className='container about_me'>
        <h1>
          <FontAwesomeIcon icon={faIdCardClip} className='faIdCardClip' />
          ABOUT ME
        </h1>
        <div className='row'>
          <div className='col-md-4'>
            <h5>{aboutMeTitle[0]}</h5>
            <p></p>
          </div>
          <div className='col-md-4'>
            <h5>{aboutMeTitle[1]}</h5>
            <p>.02.03</p>
          </div>
          <div className='col-md-4'>
            <h5>{aboutMeTitle[2]}</h5>
            <p>서울시</p>
          </div>
          <div className='col-md-4'>
            <h5>{aboutMeTitle[3]}</h5>
            <p>010</p>
          </div>
          <div className='col-md-4'>
            <h5>{aboutMeTitle[4]}</h5>
            <p>@naver.com</p>
          </div>
          <div className='col-md-4'>
            <h5>{aboutMeTitle[5]}</h5>
            <p>수원과학대 컴퓨터정보과</p>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className='skills'>
        <h1>
          <FontAwesomeIcon icon={faCode} className='faCode' />
          SKILLS & ARCHIVING
        </h1>
        <div className='skills_container'>
          <div className='skills_text'>
            <p>
              <FontAwesomeIcon icon={faHtml5} size='2x' className='faHtml5' />
              HTML
            </p>
            <p>
              <FontAwesomeIcon icon={faCss3} size='2x' className='faCss3' />
              CSS
            </p>
            <p>
              <FontAwesomeIcon icon={faJs} size='2x' className='faJs' />
              JavaScript
            </p>
            <p>
              <FontAwesomeIcon icon={faReact} size='2x' className='faReact' />
              React
            </p>
            <p>
              <FontAwesomeIcon icon={faHtml5} size='2x' className='faHtml5' />
              Redux
            </p>
          </div>
          <div className='archiving'>
            <div className='archiving_title'>
              <FontAwesomeIcon icon={faGithub} size='2x' className='faGithub' />
              <h3>Github</h3>
            </div>
            <span>지금까지 만들어 온 코드 저장소입니다.</span>
            <a href='https://github.com/AinRuthPai'>https://github.com/AinRuthPai</a>
          </div>
        </div>
      </div>

      {/* Portfolio */}
      <div className='portfolio'>
        <h1>
          <FontAwesomeIcon icon={faPen} className='faPen' />
          PORTFOLIO
        </h1>

        <div className='portfolio_01'>
          <div>
            <img src='https://ifh.cc/g/YATHEp.jpg' alt='firstImg' />
          </div>
          <div>
            <span>test1</span>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </div>

        <div className='portfolio_02'>
          <div>
            <img src='https://ifh.cc/g/YATHEp.jpg' alt='SecondImg' />
          </div>
          <div>
            <span>test1</span>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
