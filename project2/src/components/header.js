import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function AppHeader() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"> AGCS IT Solutions</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#testimonials">Testimonials</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>  
            <Nav.Link href="https://capstone-sepia.vercel.app/login">Login</Nav.Link>
            <Nav.Link href="https://capstone-sepia.vercel.app/signup">Signup</Nav.Link>  
            {/* <NavDropdown title="Profile" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://app.agcs.tech/login">Login</NavDropdown.Item>
              <NavDropdown.Item href="https://app.agcs.tech/signup">Signup</NavDropdown.Item>
              </NavDropdown>      */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppHeader;