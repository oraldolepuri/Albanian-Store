import React, { useState} from 'react';
import { Container, Row, Col, Form, Button, Spinner, InputGroup} from 'react-bootstrap';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/high-res.css'






const Register = () => { 
const [loading, setLoading] = useState(false);
const [number, setNumber] = useState(null);
const [ theme ] = useThemeHook();



const handleSubmit = (event) =>{
  const form = event.currentTarget;
  event.preventDefault();
  const username = form.username.value;
  const password = form.password.value;
  const firstName = form.firstName.value;
  const lastName = form.lastName.value;
  const email = form.email.value;


  if(username && password && firstName && lastName && email && number){
    setLoading(true);
    console.log('call api here');
    console.log(username, password, firstName, lastName, email, number);


}
}

    return (
        <Container className="py-5 mt-5">
            <Row className="justify-content-center mt-5" >
              <Col xs={11} sm={10} md={8} lg={4} className={`p-4 rounded ${theme? 'text-light bg-dark' : 'text-black bg-light'}`} >
              <h1 className={`text-center border-bottom pb-3 ${theme? 'text-primary' : 'text-light-primary'}`}  >
                Create Account
                </h1>
                <Form onSubmit={handleSubmit}>
                <Row>
                    <Form.Group className="mb-3 col-lg-6">
                          <Form.Label>First name</Form.Label>
                          <Form.Control name="firstName" type="text" placeholder="First Name" required/>
                    </Form.Group>

                    <Form.Group className="mb-3 col-lg-6">
                          <Form.Label>Last name</Form.Label>
                          <Form.Control name="lastName" type="text" placeholder="Last Name" required/>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3">
                          <Form.Label>Email</Form.Label>
                          <Form.Control name="email" type="email" placeholder="Email" required/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                          <Form.Label>Username</Form.Label>
                          <Form.Control name="username" type="text" placeholder="Username" minLength={3} required/>
                    </Form.Group>


                    <Form.Group className="mb-3">
                          <Form.Label>Mobile Number</Form.Label>
                         <PhoneInput
                         country={'al'}
                         value={number}
                         onChange={phone=> setNumber(phone)}
                         className="text-dark"
                         />
                    </Form.Group>


                    <Form.Group className="mb-3">
                          <Form.Label>Password</Form.Label>
                          <Form.Control name="password" type="text" placeholder="Password" minLength={8} required/>
                    </Form.Group>

                  <Button
                  type="submit"
                   className={`${theme? 'bg-dark-primary text-light' : 'bg-light-primary text-light'} m-auto d-block`}
                  disabled={loading}
                  style={{border: 0}}>
                  {loading?
                  <>

                     <Spinner
                     as="span"
                     animation="grow"
                     size="sm"
                     role="status"
                     aria-hidden="true"
                     />
                     &nbsp;Loading...
                  </>: 'Continue'
                  }
                  </Button>
                  </Form>
                 </Col>
            </Row>
        </Container>
         );
};

export default Register;

