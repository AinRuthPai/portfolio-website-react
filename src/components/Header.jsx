import { Navbar, Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugSaucer, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

function Header() {
  return (
    <Navbar bg='light' variant='light'>
      <Container className='header'>
        <Navbar.Brand href='/' className='header_title'>
          <FontAwesomeIcon icon={faMugSaucer} className='faMugSaucer' />
          FRONTEND
        </Navbar.Brand>
        <Nav className='me-auto'>
          <Link to='1' className='header_aboutme'>
            ABOUT ME
          </Link>
          <Link to='2' className='header_skills'>
            SKILLS & ARCHIVING
          </Link>
          <Link to='3' className='header_project'>
            PROJECT
          </Link>
        </Nav>
        <Nav.Link>
          <FontAwesomeIcon icon={faBars} className='faBars' />
        </Nav.Link>
      </Container>
    </Navbar>
  );
}

export default Header;
