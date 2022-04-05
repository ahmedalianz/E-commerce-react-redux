import "./bestprice.css";

import { Link } from "react-router-dom";
import React from "react";

export default function Bestprice() {
  return (
    <div className={`bestprice-block py-4`}>
      <div className="bestprice-head container">
        <div className="bestprice-item">
          <div className="bestprice-text">
            <h2>وفر حتي</h2>
            <h1>650 جنيه</h1>
            <h3>
              علي بعض اجهزه{" "}
              <span style={{ color: "red" }}>التلفزيونات الذكية</span>
            </h3>
            <button>
              <Link to="/tvs">تسوق الآن</Link>
            </button>
          </div>
          <span className="best-span globalcenter">أفضل الاسعار</span>
          <img src="images/bestprice/stve.jpg" alt="phone" />
        </div>
      </div>
    </div>
  );
}
