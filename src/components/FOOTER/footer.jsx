import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
export default function Footer() {
    return (<div className={`footer-block`}>
        <div className="footer-head">
            <div>
                <h4>Store Location</h4>
                <h6>Adress 1 </h6>
                <h6>Adress 2</h6>
                <h6>Adress 3</h6>
            </div>
            <div>
                <h4>Shop</h4>
                <h6><Link to='/labtops'>Labtops</Link></h6>
                <h6><Link to='/phones'>Mobiles</Link></h6>
                <h6><Link to='/tvs'>Tv</Link></h6>
                <h6><Link to='/headphones'>HeadPhones</Link></h6>
                <h6><Link to='/watches'>Wearable Tech</Link></h6>
                <h6><Link to='/sale'>Sale</Link></h6>
            </div>
            <div>
                <h4>Customer Support</h4>
                <h6><Link to='/help'>Help Center</Link></h6>
                <h6><Link to='/contact'>Contact</Link></h6>
                <h6><Link to='/about'>About Us</Link></h6>
            </div>
            <div>
                <h4>Policy</h4>
                <h6><Link to='/return'>Shipping & Return</Link></h6>
                <h6><Link to='/terms'>Terms & Conditions</Link></h6>
                <h6><Link to='/payment'>Payment Methods</Link></h6>
            </div>

        </div>
    </div>
    )
}
