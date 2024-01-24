import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Project1 from '../../assets/Project1.png';
import Project2 from '../../assets/Project2.png';
function Projects() {
  return (
    <Container fluid>
      <Row className='text-center'>
        <Col><a href='https://robsprouse.github.io/Gaming-Holidays/'><img className='Project1Img' src={Project1}></img></a></Col>
        <Col><a href='https://hidden-refuge-12457-e7186f1acd67.herokuapp.com/'><img className='Project2Img' src={Project2}></img></a></Col>
      </Row>
    </Container>
  );
}

export default Projects;