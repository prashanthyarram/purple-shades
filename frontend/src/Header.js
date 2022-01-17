import React, { useEffect, useState } from 'react'
import './Header.css'


export default function Header() {
  const [cartcount, setcartcount] = useState(0)
  const count = JSON.parse(localStorage.getItem('cartitems'))
  
useEffect(() => {
  if(count){
  setcartcount(count.length)
}
}, [count])

  return (

    <nav className='navbar1' >
      <a className='you1' href="/">
      <h4 className="navtitle1">Purpleshades.com</h4>
      </a>
      
      <ul className='navlinks1'>
        <li><a  id='home' href="/">Home</a></li>
        <li><a id='men' href="/men">Men</a></li>
        <li><a id='women' href="/women">Women</a></li>
        <li><a id='children' href="/children">Children</a></li>
        <li><a id='accessories' href="/accessories">Accessories</a></li>
      </ul>
      <a href="/login"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-person login" viewBox="0 0 16 16">
        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
      </svg></a>
      <a href="/cart"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart cart" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
      </svg><span class="badge ut rounded-circle bg-danger bg-secondary">{cartcount}</span></a>
    </nav>


  )
}
