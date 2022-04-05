import "./special.css";

import { Link } from "react-router-dom";
import React from "react";

export default function Spectial() {
  return (
    <div className={`special-block py-4`}>
      <div className="special-head container">
        <div className="special-item">
          <div className="special-text">
            <h2>عرض اليوم</h2>
            <h1>
              تخفيض
              <span style={{ color: "#751FFF" }}>30%</span>{" "}
            </h1>
            <div className="special-text-2">
              <h3>
                علي بعض <span style={{ color: "red" }}>الساعات الذكيه</span>
              </h3>
              <button>
                <Link to="/watches">تسوق الآن</Link>
              </button>
            </div>
          </div>
          <span className="special-span globalcenter">أفضل جوده</span>
          <img src="images/special/spe.jpg" alt="phone" />
        </div>
      </div>
    </div>
  );
}
