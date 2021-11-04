import React from 'react'
import { Link } from 'react-router-dom'
import './catagory.css'

export default function Catagory() {

    return (<div id='catagory' className={`catagory-block`}>
        <h1 className={` globalcenter`}>Shop By Catagory</h1>
        <div className="catagory-head">
            <div className='catagory-item'><Link to='phones'>
                <img src="images/catagory/phone.png" alt="phone" /></Link>
            </div>
            <div className='catagory-item'><Link to='/labtops'>
                <img src="images/catagory/labtop2.png" alt="labtop" /></Link>
            </div>
            <div className='catagory-item'><Link to="/headphones">
                <img src="images/catagory/headphone.png" alt="headphone" /></Link>
            </div>
            <div className='catagory-item'><Link to='/tvs'>
                <img src="images/catagory/tv.png" alt="tv" /></Link>
            </div>
            <div className='catagory-item'><Link to='watches'>
                <img src="images/catagory/watch.png" alt="watch" /></Link>
            </div>
            <div className='catagory-item'><Link to='/accessories'>
                <img src="images/catagory/bag.png" alt="accessories" /></Link>
            </div>
        </div></div>
    )
}
