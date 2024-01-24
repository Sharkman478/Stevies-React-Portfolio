import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyPhoto from '../../assets/MyPhoto.png';

export default function AboutMe() {
    const [open, setOpen] = useState(false);
    return(
        <>
        <Button
        onClick={() => setOpen(!open)}
        aria-controls="Text"
        aria-expanded={open}
      >
        Past
      </Button>
      <Collapse in={open}>
        <div id="Text">
          I was in college at Christopher NewPort University when I found computer science and coding. I realized that CNU wasn't for me and so I decided to leave CNU and spend a semester at JSARG community college, I then came across the UofR coding bootcamp.
        </div>
      </Collapse>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="Text"
        aria-expanded={open}
      >
        Present
      </Button>
      <Collapse in={open}>
        <div id="Text">
          I am currently enrolled in the UofR bootcamp and enjoying learning about coding. I enjoy working with other developers on projects that challenge me.
        </div>
      </Collapse>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="Text"
        aria-expanded={open}
      >
        Future
      </Button>
      <Collapse in={open}>
        <div id="Text">
          I haven't decided on my future just yet weather or not I want to go back to school and get a degree or jump out into the real world and try to find a job. I do plan to do something with coding not quite sure what it will be just yet, but am hoping to become successful.
        </div>
      </Collapse>
      <Row className='text-center'>
        <Col><img className='MyPhoto' src={MyPhoto}></img></Col>
      </Row>
        </>
    )
}
