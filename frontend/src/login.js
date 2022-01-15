import React, { useEffect, useState } from 'react'
import './login.css'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function Login(props) {

    const [Email, setEmail] = useState('')
    const [error1, seterror1] = useState(false)
    const [Password, setPassword] = useState('')
    const [isloggedin, setisloggedin] = useState(JSON.parse(localStorage.getItem('userInfo')))
    const [isadmin, setisadmin] = useState(false)

    const signoutHandler=()=>{
        localStorage.removeItem('userInfo')
        localStorage.removeItem('cartitems')
        setisloggedin(false)
    }
    
    const submithandler = async (e) => {
        e.preventDefault()
        try {
            
            const { data } = await axios.post('/api/users/signin', {
                email: Email,
                password: Password
            })

            localStorage.setItem('userInfo', JSON.stringify(data))
            seterror1(false)
            window.location.href = "/"
        }
        catch (err) {
            seterror1(true)
            setisloggedin(false)
        }
    }

    useEffect(() => {
        setisadmin(isloggedin.isadmin)
    }, [isloggedin])
  


    if (isloggedin) {
        return (
<>
          <div className='usr'>
          <nav className='navbar navbar-light bg-light'>
                    <h6 className='navbar-brand'>My Account</h6>
                </nav>
              <h5>User Info</h5>
              <p id='name'>Name : {isloggedin.name}</p>
              <p id='email'>Email : {isloggedin.email}</p>
              <p className={isadmin?'tru name':'fal'}>Seller : YES IS SELLER(ADMIN)</p>
              <button className='btn btn-secondary'>Edit Details</button>
          </div>
          



            
            <div className='userInfo'>
              
                <h6>Change Password</h6>

                <label id='currentlabel' htmlFor="current">Enter the current password</label>
                <input type="password" name="password" id="current" />
                <label id='newlabel' htmlFor="new">Enter the New password</label>
                <input type="password" name="re-password" id="new" />
                <label id='reenternewlabel' htmlFor="reenternew">Re-enter the New password</label>
                <input type="password" name="renew-password" id="reenternew" />
                <button className='btn btn-primary change'>Change Password</button>
                <button className='btn btn-danger  signout' onClick={()=>signoutHandler()}>Sign out</button>
            </div>
            <a href="/registerproduct"><button className={isadmin?'truebaby':'falsebaby'}>Sell a product</button></a>
            
            </>
        )
    }
    return (
        <div className='loginpage'>
            <h3 className="heading">PurpleShades.com</h3>
            <Form className='loginform' onSubmit={submithandler}>
                <p className='loginheading'>Login/Signup</p>
                {
                    error1 ? <div className="alert alert-danger" role="alert">
                        Invalid Email or password!
                    </div>
                        : <div></div>
                }

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>


                <Button variant="primary" type="submit" >
                    Login
                </Button>


                <a className='createacc' href="/signup">create account</a>
            </Form>
        </div>
    )
}
