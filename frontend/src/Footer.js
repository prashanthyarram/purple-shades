import React from 'react'
import './footer.css'

export default function Footer() {
    return (
        <>
        <div className='bg-dark text-white-50 footer'>
        <h3 className='footertitle'>PurpleShades.com</h3>
        <p className='copy'>©2021 purpleshades.com</p>
        <p className='created'> Created by : Prashanth Yarram</p>
        <a className='link' href="/details">Click to see details</a>
        </div>
        </>
    )
}
