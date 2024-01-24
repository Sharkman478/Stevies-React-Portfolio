import ResumeDoc from '../../assets/SteviesResume.pdf';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';

export default function Resume() {
    const [open, setOpen] = useState(false);
    return (
        <>
         <Button
        onClick={() => setOpen(!open)}
        aria-controls="Proficiencies"
        aria-expanded={open}
      >
        Proficiencies
      </Button>
      <Collapse in={open}>
        <div id="Text">
          React,
          Css,
          HTML,
          JavaScript,
          SQL,
          Regex
        </div>
      </Collapse>
        <Button href={ResumeDoc} download>Download Stevie's Resume</Button>
        </>
    )
}
