import React from 'react'
import './login.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function login() {
    return (
        <div className='loginpage'>
            <h3 className="heading">PurpleShades.com</h3>
            <Form className='loginform'>
                <p className='loginheading'>Login/Signup</p>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Accept all terms and conditions" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <a className='createacc' href="/signup">create account</a>
            </Form>
        </div>
    )
}
