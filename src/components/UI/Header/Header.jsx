import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Header() {
    return (
        <>
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>Stevie Helber</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/AboutMe">About Me</Nav.Link>
            <Nav.Link href="/ContactPage">Contact</Nav.Link>
            <Nav.Link href="/Resume">Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </>
    );
}