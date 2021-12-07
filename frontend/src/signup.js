import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import './signup.css'

export default function signup() {
    return (
        <div>
            <h3 className='Heading'>PurpleShades.com</h3>
            <Form className='Signinform'>
                <h6 className='signup'>Signup</h6>
     <Row  className="mb-3">           
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text" placeholder="Enter Firstname" />
    </Form.Group>

    
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Lastname</Form.Label>
      <Form.Control type="text" placeholder="Enter Lastname" />
    </Form.Group>

    </Row>

  <Col className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Enter Password" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Confirm Password</Form.Label>
      <Form.Control type="password" placeholder="Confirm Password" />
    </Form.Group>
  </Col>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="House Number,Floor" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>

<option> Arunachal Pradesh</option> 
<option> Assam</option> 
<option> Bihar</option> 
<option> Chhattisgarh</option> 
<option> Goa</option> 
<option> Gujarat</option> 
<option>Haryana	</option>
<option>Himachal Pradesh</option>
<option>Jammu and Kashmir</option>
<option>Jharkhand</option>
<option>Karnataka</option>
<option>Kerala</option>
<option>Madhya Pradesh</option>
<option>Maharashtra</option>
<option>Manipur	</option>
<option>Meghalaya</option>
<option>Mizoram	</option>
<option>Nagaland</option>
<option>Odisha</option>
<option>Punjab</option>
<option>Rajasthan</option>
<option>Tamil Nadu</option>
<option>Telangana</option>
<option>Tripura	</option>
<option>Uttar Pradesh</option>	
<option>West Bengal</option>
      
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Accept Terms and Conditions" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Signup
  </Button>
</Form>
        </div>
    )
}
