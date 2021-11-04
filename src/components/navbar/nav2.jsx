import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
export default function Nav2() {
    let [logo, setLogo] = useState('')
    let [cartz, setCart] = useState('')
    const { cart } = useSelector(state => state.cart)
    return (
        <nav className="navbar navbar-expand-sm nav2">
            <div className={`container-fluid `}>
                <Link className="navbar-brand logo-block" to="/">
                    <img className={`logo ${logo}`} src='images/logo.png' />
                </Link>

                <i id='moonsun'></i>
                <Link className="nav-link" to="/cart">
                    <i id='shopping-cart' className={`fas fa-shopping-cart ${cartz}`}>
                        <span id='incart-number'>
                            {cart.length}
                        </span>
                    </i>
                </Link>
            </div>
        </nav>
    )
}
