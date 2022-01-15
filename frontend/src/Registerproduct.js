
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

export default function Registerproduct() {
    const [Name, setName] = useState('')
    const [Img1, setImg1] = useState('')
    const [Img2, setImg2] = useState('')
    const [Img3, setImg3] = useState('')
    const [Img4, setImg4] = useState('')
    const [Brand, setBrand] = useState('')
    const [Category, setCategory] = useState('')
    const [Description, setDescription] = useState('')
    const [Price, setPrice] = useState('')
    const [Details, setDetails] = useState('')
    const [Rating, setRating] = useState('')
    const [Numreviews, setNumreviews] = useState('')
    const [Actualprice, setActualprice] = useState('')
    
 
 const submitHandler = async (e)=>{
     e.preventDefault()
     try {
             
         const { data } = await axios.post('/api/products/register', {
             name:Name,
             img1:Img1,
             img2:Img2,
             img3:Img3,
             img4:Img4,
             brand:Brand,
             category:Category,
             description:Description,
             price:Price,
             details:Details,
             rating:Rating,
             numreviews:Numreviews,
             actualprice:Actualprice
         })
         alert(`Product Uploaded ${data.name} has been given an id ${data._id}`)
     }
     catch (err) {
         console.log(err)
         alert(`An error occured :${err}`)
     }
    }






    return (
        <div className='registerproduct'>

          <nav className='navbar'>
                    <h6 className='navbar-brand'>Upload a Product</h6>
                </nav>
            <div className="registerdetails">
            
            <h6>Instructions and details for the user.</h6>
            <p>All the information provided in this page must be true.</p>
            <p>Enter the URLs of the images in the image section.</p>
            <p>This web application is for representation purpose only so it may not have functions like 
                <ul>
                    <li>Payments System</li>
                    <li>Rating System</li>
                    <li>Email verification (To verify if user email is genuine or not)</li>
                    <li>A perfect homepage that shows the sellers best goods, offers, Deals and Some UI to help users find their products </li>
                    <li>Shipping screen</li>
                    <li>To delete or alter product details</li>
                    <li>To alter user details</li>
                </ul>
            </p>
            <p>
                As the application is not capable of recording user reviews and ratings as of now we request you to enter some random information in the fields.In the future  the fields will be disabled when rating system is functional.
            </p>
            <p>Products once uploaded cannot be altered or deleted as of now by common user(Non programmer).In the future the features will be provoded.</p>
            </div>
            
            <Form className='productupload' onSubmit={submitHandler}>

                <Form.Label className='label' htmlFor="inputPassword5">Name</Form.Label>
                <Form.Control
                onChange={(e) => setName(e.target.value)}
                    className='form'
                    type="text"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                />

                <Form.Label className='label' htmlFor="inputPassword5">Image 1</Form.Label>
                <Form.Control
                onChange={(e) => setImg1(e.target.value)}
                className='form'
                type="text"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                />

                <Form.Label className='label' htmlFor="inputPassword5">Image 2</Form.Label>
                <Form.Control
                onChange={(e) => setImg2(e.target.value)}
                className='form'
                type="text"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                /> 
                
                <Form.Label className='label' htmlFor="inputPassword5">Image 3</Form.Label>
                <Form.Control
                onChange={(e) => setImg3(e.target.value)}
                className='form'
                type="text"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                /> 
                
                <Form.Label className='label' htmlFor="inputPassword5">Image 4</Form.Label>
                <Form.Control
                onChange={(e) => setImg4(e.target.value)}
                className='form'
                type="text"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                /> 
                
                <Form.Label className='label' htmlFor="inputPassword5">Brand</Form.Label>
                <Form.Control
                onChange={(e) => setBrand(e.target.value)}
                className='form'
                type="text"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                />
                <Form.Select aria-label="Default select example" className='form'
                 onChange={(e) => setCategory(e.target.value)}>
                    <option>Category</option>
                    <option value="men">men</option>
                    <option value="women">women</option>
                    <option value="children">children</option>
                    <option value="accessories">accessories</option>
                   
                </Form.Select>
                
                <Form.Group className="mb-3 form" controlId="exampleForm.ControlTextarea1">
                   <Form.Label>Description</Form.Label>
                   <Form.Control as="textarea" rows={5} onChange={(e) => setDescription(e.target.value)} />
                </Form.Group>
                
                <Form.Label className='label' htmlFor="inputPassword5">Price</Form.Label>
                <Form.Control
                onChange={(e) => setPrice(e.target.value)}
                className='form'
                    type="number"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                />
                
                <Form.Label className='label' htmlFor="inputPassword5">Details</Form.Label>
                <Form.Control
                onChange={(e) => setDetails(e.target.value)}
                className='textarea'
                type="text"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                />
                
                <Form.Label className='label' htmlFor="inputPassword5">Rating</Form.Label>
                <Form.Control
                onChange={(e) => setRating(e.target.value)}
                className='form'
                    type="number"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                />
                
                <Form.Label className='label' htmlFor="inputPassword5">Number of Reviews</Form.Label>
                <Form.Control
                onChange={(e) => setNumreviews(e.target.value)}
                className='form'
                    type="number"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                />
                
                <Form.Label className='label' htmlFor="inputPassword5">Actual price</Form.Label>
                <Form.Control
                onChange={(e) => setActualprice(e.target.value)}
                className='form'
                    type="number"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                />




                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
    }
