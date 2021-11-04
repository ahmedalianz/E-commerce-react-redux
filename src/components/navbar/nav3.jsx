import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap';

export default function Nav3() {
    const [menu, setMenu] = useState(false)
    const toggle = () => {
        setMenu(!menu)
    }

    return (
        <Navbar expand='sm'>
            <NavbarBrand></NavbarBrand>
            <NavbarToggler onClick={toggle} >
                <i style={{ color: "var(--main-color)" }} className='fas fa-bars me-4'></i>
            </NavbarToggler>
            <Collapse isOpen={menu} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <Link className={` ps-3 nav3-links`} to="/labtops">Labtops</Link>
                    </NavItem>
                    <NavItem>
                        <Link className={`ps-3 nav3-links`} to="/phones">Mobiles</Link>
                    </NavItem>
                    <NavItem>
                        <Link className={`ps-3 nav3-links`} to="/tvs">TV</Link>
                    </NavItem>
                    <NavItem>
                        <Link className={`ps-3 nav3-links`} to="/headphones">HeadPhones</Link>
                    </NavItem>
                    <NavItem>
                        <Link className={`ps-3 nav3-links`} to="/watches">Watches</Link>
                    </NavItem>
                    <NavItem>
                        <Link className={`ps-3 nav3-links`} to="/accessories">Accessories</Link>
                    </NavItem>
                    <NavItem>
                        <Link className={` ps-3 nav3-links-red`} to="/sale">Sale<i style={{ color: 'red' }} className="fas fa-fire ps-1"></i></Link>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}
