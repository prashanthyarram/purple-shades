import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import './signup.css'
import axios from 'axios'

export default function Signup() {


  const [Email, setEmail] = useState('')
  const [Name, setName] = useState('')
  const [password1, setpassword1] = useState('')
  const [password2, setpassword2] = useState('')
  const [Password, setPassword] = useState('')
  const [error401, seterror401] = useState(false)
  const [duperror, setduperror] = useState(false)


const submitHandler= async (e)=>{
  e.preventDefault()
        try {
            if(password1===password2){
                  setPassword(password1)
            }
            else{
                  seterror401(true)
            }
            const { data } = await axios.post('/api/users/register', {
                email: Email,
                password: Password,
                name:Name
            })

            localStorage.setItem('userInfo', JSON.stringify(data))
            window.location.href = "/"
            alert("Signup Sucess \n Hello! Welcome to purpleshades.com")
            
        }
        catch (err) {
            setduperror(true)
        }
}

  return (
    <div>
      <h3 className='Heading'>PurpleShades.com</h3>
      <Form className='Signinform' onSubmit={submitHandler}>
        <h6 className='signup'>Signup</h6>
        {error401 ? <div className="alert alert-danger" role="alert">
                        The Passwords dosent match!
                    </div>
                        : <div></div>}
        {duperror ? <div className="alert alert-danger" role="alert">
                        An account with the email Id already exists!!
                    </div>
                        : <div></div>}
                        
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" onChange={(e) => setName(e.target.value)} />
          </Form.Group>


        </Row>

        <Col className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Password" onChange={(e) => setpassword1(e.target.value)} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" onChange={(e) => setpassword2(e.target.value)} />
          </Form.Group>
        </Col>

        <Button variant="primary" type="submit">
          Signup
        </Button>
      </Form>
    </div>
  )
}
