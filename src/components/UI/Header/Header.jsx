import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
export default function Header() {
    return (
        <>
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>Stevie Helber</Navbar.Brand>
          <Nav
            variant="underline"
            defaultActiveKey="/About"
            className="me-auto"
          >
            <Nav.Link as={Link} to="/AboutMe" eventKey="/AboutMe">
              About Me
            </Nav.Link>
            <Nav.Link as={Link} to="/Projects" eventKey="/Projects">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/ContactPage" eventKey="/ContactPage">
              Contact Me
            </Nav.Link>
            <Nav.Link as={Link} to="/Resume" eventKey="link-4">
              Resume
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </>
    );
}