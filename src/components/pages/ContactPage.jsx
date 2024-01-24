import React from 'react';
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';

export default function ContactPage() {
    return (
        <>
        <MDBInput label='Email input' id='typeEmail' type='email' />
        <MDBInput label='Password input' id='typePassword' type='password' />
        <MDBInput label='Message input' id='typeText' type='message' />
        <MDBBtn color='submit'>
        Submit
      </MDBBtn>
        </>
    )
}