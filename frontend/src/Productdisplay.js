import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import './productdisplay.css'
import '../node_modules/font-awesome/css/font-awesome.min.css';



export default function Productdisplay(props) {


  const _id=props.match.params._id;

  const [product, setproduct] = useState([])
  useEffect(() => {
    const fetchdata=async ()=>{
        const {data}=await axios.get(`/api/products/${_id}`);
        setproduct(data)
    } 
      fetchdata();
  }, [_id])

  
    const additemtocart=(productid)=>{
      props.history.push(`/cart/${productid}`);
    }  
  
  //end of add items to cart section
  const img1=product.img1
  const img2=product.img2
  const img3=product.img3
  const img4=product.img4

  return (
    <>

      <Carousel variant="dark" className='imagescroller'>

        <Carousel.Item className='item'>
          <div>
          <img
            className="d-block rounded mx-auto d-block h-100"
            src={img1}
            alt="First slide"
          />
          </div>
        </Carousel.Item>


        <Carousel.Item className='item'>
          <img
            className="d-block rounded mx-auto d-block h-100"
            src={img2}
            alt="Second slide"
          />
        </Carousel.Item>


        <Carousel.Item className='item'>
          <img
            className="d-block rounded mx-auto d-block h-100"
            src={img3}
            alt="Third slide"
          />
        </Carousel.Item>



        <Carousel.Item className='item' >
          <img
            className="d-block rounded mx-auto d-block h-100 "
            src={img4}
            alt="Fourth slide"
          />
        </Carousel.Item>
 
      </Carousel>
      <div className="price">
        <h3>
          Price: ₹{product.price}
        </h3>
        <h6>₹{product.actualprice}</h6>

      </div>

      <div className="d-grid gap-2">
        <Button onClick={()=>{additemtocart(product._id)}} className='w-25 mx-auto shadow  mb-4 ' shadow p-4 mb-4 bg-white variant="primary" size="lg">
          Add To Cart
        </Button>

        <Dropdown className='mx-auto'>
          <Dropdown.Toggle className='w-100 mx-auto shadow  mb-4' variant="secondary" id="dropdown-basic">
            Select Size
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">XS</Dropdown.Item>
            <Dropdown.Item href="#/action-2">S</Dropdown.Item>
            <Dropdown.Item href="#/action-3">M</Dropdown.Item>
            <Dropdown.Item href="#/action-3">L</Dropdown.Item>
            <Dropdown.Item href="#/action-3">XL</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

      </div>




      <div className='productdescription'>
        <h2>Product Description</h2>
        <p>
          {product.description}
        </p>
      </div>

      <div className='productdetails'>
        <h2>Product Detailis</h2>
        <p>
          {product.details}
        </p>

      </div>



      {/* here the form for user rating submission starts */}


      <div className='container '>


        <div className="star-widget">
          <input type="radio" name="rating" _id="rate-5" />
          <label className="fa fa-star" htmlFor="rate-5"></label>
          <input type="radio" name="rating" _id="rate-4" />
          <label className="fa fa-star" htmlFor="rate-4"></label>
          <input type="radio" name="rating" _id="rate-3" />
          <label className="fa fa-star" htmlFor="rate-3"></label>
          <input type="radio" name="rating" _id="rate-2" />
          <label className="fa fa-star" htmlFor="rate-2"></label>
          <input type="radio" name="rating" _id="rate-1" />
          <label className="fa fa-star" htmlFor="rate-1"></label>


          <form className="text1" action="#">
            <header></header>
            <div className="textarea">
              <textarea name="" _id="" cols="30" placeholder="Describe your Experience.."></textarea>
            </div>
            <div className="submit">
              <Button type="submit">Post</Button>
            </div>
          </form>
        </div>
      </div>


      {/* Here the form present for user rating submission ends */}

      {/* this is where the comments section starts here the already presnt user comments are present  */}

      <hr />
      <div className="productratings">


        <span>
          <i className={
            product.rating >= 1
              ? "fa fa-star"
              : product.rating >= 0.5
                ? "fa fa-star-half-o"
                : "fa fa-star-o"

          }
          >
          </i>
        </span>
        <span>
          <i className={
            product.rating >= 2
              ? "fa fa-star"
              : product.rating >= 1.5
                ? "fa fa-star-half-o"
                : "fa fa-star-o"

          }
          >
          </i>
        </span>
        <span>
          <i className={
            product.rating >= 3
              ? "fa fa-star"
              : product.rating >= 2.5
                ? "fa fa-star-half-o"
                : "fa fa-star-o"

          }
          >
          </i>
        </span>
        <span>
          <i className={
            product.rating >= 4
              ? "fa fa-star"
              : product.rating >= 3.5
                ? "fa fa-star-half-o"
                : "fa fa-star-o"

          }
          >
          </i>
        </span>
        <span>
          <i className={
            product.rating >= 5
              ? "fa fa-star"
              : product.rating >= 4.5
                ? "fa fa-star-half-o"
                : "fa fa-star-o"

          }
          >
          </i>
        </span>

        <h4>
          {product.rating} rating
        </h4>

        <h6>
          {product.numreviews} Number of ratings
        </h6>
        <a href="ratings">View all reviews</a>
      </div>
      <hr />
      <div className='usercomment'>
        <h5 className="topreviews">Top Reviews</h5>
        <hr />
        <h3 className='usernameincomments'>{product.username}</h3>
        <p>{product.comment}</p>
        <hr />
      </div>
    </>

  )
}