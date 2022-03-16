import { Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faIdCardClip } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function MainPage() {
  return (
    <div className='mainpage'>
      <Carousel variant='dark' className='carousel' id='0'>
        <Carousel.Item>
          <img
            style={{ height: "600px", objectFit: "contain" }}
            className='d-block w-100'
            src='https://images.unsplash.com/photo-1526649661456-89c7ed4d00b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1310&q=80'
            alt='First slide'
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            style={{ height: "600px", objectFit: "contain" }}
            className='d-block w-100'
            src='https://images.unsplash.com/photo-1543058871-74a1d669ba70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'
            alt='Second slide'
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            style={{ height: "600px", objectFit: "contain" }}
            className='d-block w-100'
            src='https://images.unsplash.com/photo-1529101091764-c3526daf38fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1633&q=80'
            alt='Third slide'
          />
          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>

      {/* About me */}
      <div className='section about_me' id='1'>
        <h2>
          <FontAwesomeIcon icon={faIdCardClip} className='faIdCardClip icon' />
          ABOUT ME
        </h2>
        <div className='row'>
          <div className='col-md-4'>
            <h5>이름</h5>
            <p>1</p>
          </div>
          <div className='col-md-4'>
            <h5>생년월일</h5>
            <p>2</p>
          </div>
          <div className='col-md-4'>
            <h5>주소지</h5>
            <p>3</p>
          </div>
          <div className='col-md-4'>
            <h5>전화번호</h5>
            <p>4</p>
          </div>
          <div className='col-md-4'>
            <h5>이메일</h5>
            <p>5</p>
          </div>
          <div className='col-md-4'>
            <h5>학력</h5>
            <p>6</p>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className='section skills' id='2'>
        <h2>
          <FontAwesomeIcon icon={faCode} className='faCode icon' />
          SKILLS & ARCHIVING
        </h2>
        <div className='skills_archiving'>
          <div className='skills_container'>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png'
              className='skills_logo'
            />
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png'
              className='skills_logo'
            />
            <img src='https://www.brutka.com/img/javascript-logo.png' className='skills_logo' />
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png'
              className='skills_logo'
            />
          </div>
          <div className='archiving_container'>
            <div className='archiving_text'>
              <FontAwesomeIcon icon={faGithub} size='2x' className='faGithub' />
              <h3>Github</h3>
            </div>
            <span>지금까지 만들어 온 코드 저장소입니다. </span>
            <a href='https://github.com/AinRuthPai' target='_blank'>
              https://github.com/AinRuthPai
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
