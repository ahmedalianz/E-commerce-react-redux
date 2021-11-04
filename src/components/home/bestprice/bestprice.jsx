import React from 'react'
import { Link } from 'react-router-dom'
import './bestprice.css'

export default function Bestprice() {

    return (
        <div className={`bestprice-block `}>
            <div className="bestprice-head">
                <div className='bestprice-item'>
                    <div className='bestprice-text'>
                        <h2>Save up to</h2>
                        <h1>$150</h1>
                        <h3>On selected Home Smart <span style={{ color: 'red' }}>TV</span>s</h3>
                        <p>Terms and conditions apply</p>
                        <button><Link to='/tvs'>Shop Now</Link></button>
                    </div>
                    <span className="best-span globalcenter">Best Price</span>
                    <img src="images/bestprice/stve.jpg" alt="phone" />
                </div>
            </div>
        </div>
    )
}
