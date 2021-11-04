import React from "react"
import './shipping.css'

export default function Shipping() {
    return (<div className={`shipping-block`}>
        <div className="shipping-head">
            <div className='shipping-item'>
                <i className="fas fa-truck shipping-icon"></i>
                <p>Delivery any-where</p>
            </div>
            <div className='shipping-item'>
                <i className="fas fa-box shipping-icon"></i>
                <p>Free shipping on Orders over 350 $</p>
            </div>
            <div className='shipping-item'>
                <i className="fas fa-dollar-sign shipping-icon"></i>
                <p>Low Prices Guaranteed</p>
            </div>
            <div className='shipping-item'>
                <i className="far fa-clock shipping-icon"></i>
                <p>Available 24 / 7</p>
            </div>
        </div></div>
    )
}
