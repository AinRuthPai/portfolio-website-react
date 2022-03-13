import { Carousel, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faCode, faIdCardClip, faFileCode, faCheck } from "@fortawesome/free-solid-svg-icons";
import { faHtml5, faCss3, faJs, faReact, faGithub } from "@fortawesome/free-brands-svg-icons";
import "../App.css";
import { useState } from "react";

function MainPage() {
  let [modal, setModal] = useState(false);

  return (
    <div className='mainpage'>
      <Carousel variant='dark' className='carousel'>
        <Carousel.Item>
          <img
            style={{ height: "600px", objectFit: "contain" }}
            className='d-block w-100'
            src='https://ifh.cc/g/xvk0LG.jpg'
            alt='First slide'
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            style={{ height: "600px", objectFit: "contain" }}
            className='d-block w-100'
            src='https://ifh.cc/g/s8L0fh.jpg'
            alt='Second slide'
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            style={{ height: "600px", objectFit: "contain" }}
            className='d-block w-100'
            src='https://ifh.cc/g/STXIKN.jpg'
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
        <h1>
          <FontAwesomeIcon icon={faIdCardClip} className='faIdCardClip icon' />
          ABOUT ME
        </h1>
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
        <h1>
          <FontAwesomeIcon icon={faCode} className='faCode icon' />
          SKILLS & ARCHIVING
        </h1>
        <div className='skills_archiving'>
          <div className='skills_container'>
            <p>
              <FontAwesomeIcon icon={faHtml5} size='2x' className='faHtml5 icon' />
              HTML
            </p>
            <p>
              <FontAwesomeIcon icon={faCss3} size='2x' className='faCss3 icon' />
              CSS
            </p>
            <p>
              <FontAwesomeIcon icon={faJs} size='2x' className='faJs icon' />
              JavaScript
            </p>
            <p>
              <FontAwesomeIcon icon={faReact} size='2x' className='faReact icon' />
              React
            </p>
            <p>
              <FontAwesomeIcon icon={faReact} size='2x' className='faReact icon' />
              Redux
            </p>
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

      {/* project */}
      <div className='section project' id='3'>
        <h1>
          <FontAwesomeIcon icon={faPen} className='faPen icon' />
          PROJECT
        </h1>
        <div className='project_container'>
          <div className='project_01 div_project'>
            <div className='project_imgbox'>
              <img src='https://ifh.cc/g/Fia5g9.jpg' alt='Img' />
            </div>
            <div>
              <h3>
                <FontAwesomeIcon icon={faFileCode} className='faFileCode icon' />
                신발 쇼핑몰
              </h3>
              <p>
                <FontAwesomeIcon icon={faCheck} className='faCheck icon' />
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </p>
              <p>
                <FontAwesomeIcon icon={faCheck} className='faCheck icon' />
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </p>
              <p>
                <FontAwesomeIcon icon={faCheck} className='faCheck icon' />
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </p>
            </div>
          </div>

          <div className='project_02 div_project'>
            <div className='project_imgbox'>
              <img src='https://ifh.cc/g/VIK4w6.jpg' alt='Img' />
            </div>
            <div>
              <h3>
                <FontAwesomeIcon icon={faFileCode} className='faFileCode icon' />
                포트폴리오 웹사이트
              </h3>
              <p>
                <FontAwesomeIcon icon={faCheck} className='faCheck icon' />
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </p>
              <p>
                <FontAwesomeIcon icon={faCheck} className='faCheck icon' />
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </p>
              <p>
                <FontAwesomeIcon icon={faCheck} className='faCheck icon' />
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </p>
            </div>
          </div>

          <div className='project_03 div_project'>
            <div className='project_imgbox'>
              <img src='https://ifh.cc/g/Fia5g9.jpg' alt='Img' />
            </div>
            <div>
              <h3>
                <FontAwesomeIcon icon={faFileCode} className='faFileCode icon' />
                신발 쇼핑몰
              </h3>
              <p>
                <FontAwesomeIcon icon={faCheck} className='faCheck icon' />
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </p>
              <p>
                <FontAwesomeIcon icon={faCheck} className='faCheck icon' />
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </p>
              <p>
                <FontAwesomeIcon icon={faCheck} className='faCheck icon' />
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </p>
            </div>
          </div>
        </div>

        <Form>
          <Form.Check
            type='switch'
            id='custom-switch'
            onClick={() => {
              setModal(!modal);
            }}
          />
        </Form>
      </div>
    </div>
  );
}

export default MainPage;
