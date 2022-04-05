import "./footer.css";

import { Link } from "react-router-dom";
import React from "react";

export default function Footer() {
  return (
    <div className={`footer-block`}>
      <div className="footer-head">
        <div>
          <h4>عناوين الموزعين</h4>
          <h6>شارع 26 يوليو, قسم قصر النيل، محافظة القاهرة </h6>
          <h6>الهرم، أولى الهرم، قسم العمرانية، الجيزة</h6>
          <h6>
            صلاح الدين عبد الكريم، قسم أول القاهرة الجديدة، محافظة القاهرة
          </h6>
        </div>
        <div>
          <h4>تسوق</h4>
          <h6>
            <Link to="/labtops">اجهزه لابتوب</Link>
          </h6>
          <h6>
            <Link to="/phones">موبايلات</Link>
          </h6>
          <h6>
            <Link to="/tvs">تلفزيونات</Link>
          </h6>
          <h6>
            <Link to="/headphones">سماعات</Link>
          </h6>
          <h6>
            <Link to="/watches">ساعات</Link>
          </h6>
        </div>
        <div>
          <h4>خدمه العملاء</h4>
          <h6>
            <Link to="/help">مركز المساعده</Link>
          </h6>
          <h6>
            <Link to="/contact">تواصل معنا</Link>
          </h6>
          <h6>
            <Link to="/about">من نحن</Link>
          </h6>
        </div>
        <div>
          <h4>سياستنا</h4>
          <h6>
            <Link to="/return">التوصيل والاسترجاع</Link>
          </h6>
          <h6>
            <Link to="/terms">السياسات والحالات</Link>
          </h6>
          <h6>
            <Link to="/payment">طرق الدفع</Link>
          </h6>
        </div>
      </div>
    </div>
  );
}
