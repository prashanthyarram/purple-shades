import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Ratings from './Ratings';
import "./content.css"

export default function Children() {
    const [products, setproducts] = useState([])

    
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get('/api/products');
            const temp = data.filter((x)=>x.category=='children')
            setproducts(temp)
            console.log(products)
        }
        fetchData()
    }, [])
    
    
    
        return (
            <>
            <h6 className='headingtext' >Children</h6>
            <div className='productslist'>

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
    
            </div >
            </>
        )
}
