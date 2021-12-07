import React from 'react'
import "./content.css"
import Productdisplay from './Productdisplay.js'
import img1 from './images/img1.jpeg'
import img2 from './images/img2.jpeg'
import img3 from './images/img3.jpeg'
import img4 from './images/img4.jpeg'
import data from'./data'

export default function Content() {
    return (
        
        
        <div className="productslist grid-container">
        {
            data.products.map(product=>(
                
        <div key={product.id} className="product grid-item">
      <a href={`/product/${product.id}`}>  
        <img className="Productimage" src={product.img1} alt="product" />
        </a> 
        <a className="productname" href={`/product/${product.id}`}>  
        <h5>{product.name}</h5>
        </a> 
        <h6>₹{product.Price}</h6>
        
        <div className="ratings">
        <span>
          <i className={
            product.Rating >= 1
              ? "fa fa-star"
              : product.Rating >= 0.5
                ? "fa fa-star-half-o"
                : "fa fa-star-o"

          }
          >
          </i>
        </span>
        <span>
          <i className={
            product.Rating >= 2
              ? "fa fa-star"
              : product.Rating >= 1.5
                ? "fa fa-star-half-o"
                : "fa fa-star-o"

          }
          >
          </i>
        </span>
        <span>
          <i className={
            product.Rating >= 3
              ? "fa fa-star"
              : product.Rating >= 2.5
                ? "fa fa-star-half-o"
                : "fa fa-star-o"

          }
          >
          </i>
        </span>
        <span>
          <i className={
            product.Rating >= 4
              ? "fa fa-star"
              : product.Rating >= 3.5
                ? "fa fa-star-half-o"
                : "fa fa-star-o"

          }
          >
          </i>
        </span>
        <span>
          <i className={
            product.Rating >= 5
              ? "fa fa-star"
              : product.Rating >= 4.5
                ? "fa fa-star-half-o"
                : "fa fa-star-o"

          }
          >
          </i>
        </span>
         
        </div>
        <p>{product.Rating}</p>
       
    </div>
    
            ))
        }
       
            
        </div>
       
        
    )
}
