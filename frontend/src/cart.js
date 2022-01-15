import React, { useEffect, useState } from 'react'
import './cart.css'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/esm/Dropdown'
import { addtocart, removefromcart } from './actions/cartactions'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'



export default function Cart(props) {
    const { _id } = useParams()
    const productid = _id
    const dispatch = useDispatch()
    useEffect(() => {
        if (productid) {
            dispatch(addtocart(productid))
        }
    }, [dispatch, productid])
    const cartproducts = useSelector(state => state.cart.cartitems)
    const removeitemfromcart = (_id) => {
        dispatch(removefromcart(_id))
    }
    
    let totalprice = 0

    for (let i = 0; i < cartproducts.length; i++) {
        totalprice=totalprice+cartproducts[i].price   
    }
    
    if (cartproducts.length == 0) {
        return (
            <>
                <nav className='navbar'>
                    <h6 className='navtext'>PurpleShades.com</h6>
                </nav>
                <div className="shoppingcart">
                    <h1 className='carttext'>Shopping cart</h1>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-x nocartimg" viewBox="0 0 16 16">
                        <path d="M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793 7.354 5.646z" />
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                    </svg>
                <div className='noproducts'>
                    
                    <h4 className='noproducttext'>CART IS EMPTY!☹</h4>
                    <h6 className='noproducttext'>looks like you have no items in your shopping cart</h6>
                    <a className='goshopping' href="/"><button className='noproductbtn'>Go Shopping </button></a>
                    
                </div>

                <div  className="totalprice">
                    <h5 className='checkout'>Checkout</h5>
                    {cartproducts.map(item => (
                        <div className='itemlist' key={item.product}>
                            <p className='listitems'>{item.name} = {item.price}×1={item.price}</p>
                        </div>
                    ))
                    }

                    <div className='totalpriceno'>
                        <hr />
                        <h6 >Total price : {totalprice}</h6>
                        <p >delivery charges   : {(cartproducts.length === 0)?'0':'140'}</p>
                        <h5 >Total Price to Pay : {totalprice + (cartproducts.length === 0)?0:140}</h5>
                    </div>

                    <button disabled={(cartproducts.length == 0)?"disabled":"enabled"} className='checkoutbtn'>CheckOut</button>

                    <a className='refund' href="#">View return and refund policy</a>

                    <div className="logos">
                        <table border="0" cellpadding="10" cellspacing="0" align="center"><tr><td align="center"></td></tr><tr><td align="center"><a href="https://www.paypal.com/webapps/mpp/paypal-popup" title="How PayPal Works" onclick="javascript:window.open('https://www.paypal.com/webapps/mpp/paypal-popup','WIPaypal','toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=1060, height=700'); return false;"><img src="https://www.paypalobjects.com/webstatic/mktg/logo/AM_mc_vs_dc_ae.jpg" border="0" alt="PayPal Acceptance Mark" /></a></td></tr></table>
                    </div>
                </div>
            </>
        )
    }


    return (
        <div>

            <nav className='navbar'>
                <h6 className='navtext'>PurpleShades.com</h6>
            </nav>
            <div className="shoppingcart">
                <h1 className='carttext'>Shopping cart</h1>
            </div>


            {
                cartproducts.map(item => (
                    <div key={item.product}>

                        <div className='cartitem'>
                            <a href={`/products/api/${item.product}`}>
                                <img className='cartimage' src={item.image} alt="imageofproduct" />
                            </a>
                            <p className='itemprice'>Price :₹{item.price}</p>
                            <a href={`/products/api/${item.product}`}>
                                <h3 className='name'>{item.name}</h3>
                            </a>

                            <p className='sizeselected'>size</p>
                            <DropdownButton variant='secondary' className='dropdwn ' id="dropdown-basic-button" title="Select Quantity">
                                <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                            </DropdownButton>
                            <button onClick={() => { removeitemfromcart(item.product) }} className='deletebtn'><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="red" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                            </svg></button>

                        </div>

                    </div>
                ))
            }
            <div className="totalprice">
                <h5 className='checkout'>Checkout</h5>
                {cartproducts.map(item => (
                    <div className='itemlist' key={item.product}>
                        <p className='listitems'>{item.name} = {item.price}×1={item.price}</p>
                    </div>
                ))
                }

                <div className='totalpriceno'>
                    <hr />
                    <h6 >Total price : {totalprice}</h6>
                    <p >delivery charges   : {(cartproducts.length === 0)?'0':'140'}</p>
                    <h5 >Total Price to Pay : {totalprice + 140}</h5>
                </div>

                <button className='checkoutbtn'>CheckOut</button>

                <a className='refund' href="#">View return and refund policy</a>

                <div className="logos">
                    <table border="0" cellpadding="10" cellspacing="0" align="center"><tr><td align="center"></td></tr><tr><td align="center"><a href="https://www.paypal.com/webapps/mpp/paypal-popup" title="How PayPal Works" onclick="javascript:window.open('https://www.paypal.com/webapps/mpp/paypal-popup','WIPaypal','toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=1060, height=700'); return false;"><img src="https://www.paypalobjects.com/webstatic/mktg/logo/AM_mc_vs_dc_ae.jpg" border="0" alt="PayPal Acceptance Mark" /></a></td></tr></table>
                </div>
            </div>
        </div>
    )
}
