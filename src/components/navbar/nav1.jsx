import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Nav1() {
    const [pointeranimation, setPAnimation] = useState('')
    const [listanimation, setListAnimation] = useState('')
    const [menu1, setMenu1] = useState('notshown1')
    const showMenu = () => {
        if (menu1 === 'shown1') {
            setMenu1('notshown1')
            setPAnimation('')
            setListAnimation('')
        } else {
            setMenu1('shown1')
            setPAnimation('pointeranim')
            setListAnimation('listanim')
        }
    }
    return (
        <div className={`container-fluid d-flex justify-content-between nav1 pt-2 `}>
            <p><i className="fas fa-box"></i><span className="ps-2">Free Shipping For Orders Over 350$</span></p>
            <i onClick={showMenu} id='nav1-bars' className='fas fa-bars me-4'></i>
            <div className='nav1-links'>
                <span><Link to='/'>Home</Link></span>
                <span><Link to='/about'>About</Link></span>
                <span><Link to='/contact'>Contact</Link></span>
                <span><Link to='/help'>Help Center</Link></span>
            </div>
            <div className={`menu ${menu1}`}>
                <img src="images/labback.png" alt="menulab" />
                <i onClick={showMenu} className="fas fa-power-off power"></i>
                <i className={`fas fa-mouse-pointer pointer ${pointeranimation}`}></i>
                <i className="far fa-hand-point-right hand"></i>
                <div className={`canvas-links ${listanimation}`}>
                    <span><Link onClick={showMenu} to="/"  ><i className="fas fa-arrow-right"></i> Home</Link></span>
                    <span><Link onClick={showMenu} to='/about'  ><i className="fas fa-arrow-right"></i> About</Link></span>
                    <span><Link onClick={showMenu} to='/contact'  ><i className="fas fa-arrow-right"></i> Contact</Link></span>
                    <span><Link onClick={showMenu} to='/help'  ><i className="fas fa-arrow-right"></i> Help Center</Link></span>
                </div>
            </div>
        </div>
    )
}
