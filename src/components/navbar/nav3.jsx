import {
  Collapse,
  Nav,
  NavItem,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from "reactstrap";
import React, { useState } from "react";

import { Link } from "react-router-dom";

export default function Nav3() {
  const [menu, setMenu] = useState(false);
  const toggle = () => {
    setMenu(!menu);
  };

  return (
    <div className="nav3">
      <div className="container">
        <Navbar expand="sm">
          <NavbarToggler onClick={toggle}>
            <i style={{ color: "#751fff" }} className="fas fa-bars me-4"></i>
          </NavbarToggler>
          <Collapse isOpen={menu} navbar>
            <Nav navbar style={{ paddingRight: "0" }}>
              <NavItem>
                <Link className={` ps-3 nav3-links`} to="/labtops">
                  اجهزه لابتوب
                </Link>
              </NavItem>
              <NavItem>
                <Link className={`ps-3 nav3-links`} to="/phones">
                  موبايلات
                </Link>
              </NavItem>
              <NavItem>
                <Link className={`ps-3 nav3-links`} to="/tvs">
                  تلفزيونات
                </Link>
              </NavItem>
              <NavItem>
                <Link className={`ps-3 nav3-links`} to="/headphones">
                  سماعات
                </Link>
              </NavItem>
              <NavItem>
                <Link className={`ps-3 nav3-links`} to="/watches">
                  ساعات
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </div>
  );
}
