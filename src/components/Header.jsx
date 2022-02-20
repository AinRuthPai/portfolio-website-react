import { Navbar, Nav, Container } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg='light' variant='light'>
      <Container>
        <Navbar.Brand href='/'>PORTFOLIO SITE</Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='/board'>Board</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
