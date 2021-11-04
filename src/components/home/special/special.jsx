import React from 'react'
import { Link } from 'react-router-dom'
import './special.css'
export default function Spectial() {
    return (
        <div className={`special-block `}>
            <div className="special-head">
                <div className='special-item'>
                    <div className='special-text'>
                        <h2>Today's Special</h2>
                        <h1><span style={{ color: "#751FFF" }}>30%</span> OFF</h1>
                        <div className='special-text-2'>
                            <h3>On selected Smart <span style={{ color: 'red' }}>Watch</span>es</h3>
                            <p>Terms and conditions apply</p>
                            <button><Link to='/watches'>Shop Now</Link></button>
                        </div>
                    </div>
                    <span className="special-span globalcenter">Very Smart</span>
                    <img src="images/special/spe.jpg" alt="phone" />
                </div>
            </div>
        </div>
    )
}
