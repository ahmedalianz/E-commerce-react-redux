import "./shipping.css";

import React from "react";

export default function Shipping() {
  return (
    <div className={`shipping-block py-4`}>
      <div className="shipping-head container">
        <div className="shipping-item">
          <i className="fas fa-truck shipping-icon"></i>
          <p>توصيل لاي مكان</p>
        </div>
        <div className="shipping-item">
          <i className="fas fa-box shipping-icon"></i>
          <p>توصيل مجاني للمشتريات بقيمه 350 جنيه او اكثر</p>
        </div>
        <div className="shipping-item">
          <i className="fas fa-dollar-sign shipping-icon"></i>
          <p>اسعار مناسبه</p>
        </div>
        <div className="shipping-item">
          <i className="far fa-clock shipping-icon"></i>
          <p>متاح 24 ساعه يوميا</p>
        </div>
      </div>
    </div>
  );
}
