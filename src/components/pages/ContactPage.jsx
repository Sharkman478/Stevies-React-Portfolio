import React from 'react';
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';

export default function ContactPage() {
    return (
        <>
        <MDBInput label='Email input' id='typeEmail' type='email' contrast/>
        <MDBInput label='Password input' id='typePassword' type='password' contrast/>
        <MDBInput label='Message input' id='typeText' type='message' contrast/>
        <MDBBtn outline color='light'>
        Submit
      </MDBBtn>
        </>
    )
}