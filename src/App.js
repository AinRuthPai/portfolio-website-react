import "./App.css";
import { useState } from "react";
import { Navbar, Nav, Container, Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faCode, faIdCardClip } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [aboutMe, setAboutMe] = useState();

  return (
    <div className='App'>
      <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand href='#home'>Navbar</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#features'>Features</Nav.Link>
            <Nav.Link href='#pricing'>Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

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

      <div className='container about_me'>
        <h1>
          <FontAwesomeIcon icon={faIdCardClip} className='faIdCardClip' />
          ABOUT ME
        </h1>
        <div className='row'>
          <div className='col-md-4'>
            <h5>이름</h5>
            <p>백훈찬</p>
          </div>
          <div className='col-md-4'>
            <h5>생년월일</h5>
            <p>93.02.03</p>
          </div>
          <div className='col-md-4'>
            <h5>주소</h5>
            <p>서울시 구로구</p>
          </div>
          <div className='col-md-4'>
            <h5>연락처</h5>
            <p>010-9159-0579</p>
          </div>
          <div className='col-md-4'>
            <h5>이메일</h5>
            <p>tanbing@naver.com</p>
          </div>
          <div className='col-md-4'>
            <h5>학력</h5>
            <p>수원과학대 컴퓨터정보과</p>
          </div>
        </div>
      </div>

      <div className='skills'>
        <h1>
          <FontAwesomeIcon icon={faCode} className='faCode' />
          SKILLS
        </h1>
        <div className='row'>
          <div className='col'>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>React</p>
            <p>Redux</p>
          </div>
        </div>
      </div>

      <div className='portfolio'>
        <h1>
          <FontAwesomeIcon icon={faPen} className='faPen' />
          PORTFOLIO
        </h1>
        <div className='portfolio_01'></div>
      </div>
    </div>
  );
}

export default App;
