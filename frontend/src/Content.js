import React, { useEffect, useState } from 'react'
import "./content.css"
import axios from 'axios'
import Ratings from './Ratings';
import Loadingbox from './Loadingbox';
import MessageBox from './MessageBox';


export default function Content() {

  const [products, setproducts] = useState([]);
  const [loading, setloading] = useState(false)
  const [error, seterror] = useState(false)
  useEffect(() => {
    const fetchdata=async ()=>{
      try{
      setloading(true)
      const {data}=await axios.get('/api/products');
      setloading(false)
      setproducts(data)
    } catch(err){
      seterror(err.message)
      setloading(false)
    }
  } 
    fetchdata();
  }, []);
    return (
      <div>
      {
        loading?(
          <Loadingbox></Loadingbox>
          )
        : error?(
          <MessageBox>{error}</MessageBox>
        )
      
        :
     
        
        (
        <div className="productslist ">
        {
            products.map(product=>(
                
        <div key={product._id} className="product">
      <a href={`/api/products/${product._id}`}>  
        <img className="Productimage" src={product.img1} alt="product" />
        </a> 
        <a className="productname" href={`/api/products/${product._id}`}>  
        <h5>{product.name}</h5>
        </a> 
        <h6>₹{product.price}</h6>
        
        <Ratings rating={product.rating} />
       
    </div>
    
            ))
        }
       
            
        </div>
        )
      }
        </div>
        
    )
}
