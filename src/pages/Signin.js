import React, { useState } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import './selection.css';
import { Link } from "react-router-dom";



function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [consent, setConsent] = useState(false);

  const isFormValid = () => {
    return firstName.trim() !== '' &&
           lastName.trim() !== '' &&
           email.trim() !== '' &&
           password.trim() !== '' &&
           consent;
  };

  return (
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden d-flex justify-content-center align-items-center'>

      <MDBCard className='my-5 bg-glass'>
        <MDBCardBody className='p-5'>


          <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password' value={password} onChange={(e) => setPassword(e.target.value)} required/>

          <Link to="/register">
            <button className='btn btn-primary w-100 mb-4' disabled={!isFormValid()}>sign in</button>
          </Link>

          <div className="text-center">

            <p>or sign in with:</p>

            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='facebook-f' size="sm"/>
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='twitter' size="sm"/>
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='google' size="sm"/>
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='github' size="sm"/>
            </MDBBtn>

            <br/>
            <br/>

            <Link to="/signin">
              <p style={{color: "black"}}>Forgot your password? Click here to reset it.</p>
            </Link>

          </div>

        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default App;
