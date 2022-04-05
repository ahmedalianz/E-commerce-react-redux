import "./catagory.css";

import { Link } from "react-router-dom";
import React from "react";

export default function Catagory() {
  return (
    <div id="catagory" className={`catagory-block py-4`}>
      <div class="container">
        <h1 className={` globalcenter`}>تسوق حسب الفئة</h1>
        <div className="catagory-head">
          <div className="catagory-item">
            <Link to="phones">
              <img src="images/catagory/phone.png" alt="phone" />
            </Link>
          </div>
          <div className="catagory-item">
            <Link to="/labtops">
              <img src="images/catagory/labtop2.png" alt="labtop" />
            </Link>
          </div>
          <div className="catagory-item">
            <Link to="/headphones">
              <img src="images/catagory/headphone.png" alt="headphone" />
            </Link>
          </div>
          <div className="catagory-item">
            <Link to="/tvs">
              <img src="images/catagory/tv.png" alt="tv" />
            </Link>
          </div>
          <div className="catagory-item">
            <Link to="watches">
              <img src="images/catagory/watch.png" alt="watch" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
