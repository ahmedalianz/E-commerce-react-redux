import "./newsletter.css";

import React from "react";

export default function NewsLetter() {
  return (
    <div className={`newsletter-block py-4`}>
      <div className="newsletter-head container">
        <h3 className="globalcenter">أخبارنا</h3>
        <hr style={{ color: "white" }} />
        <p className="globalcenter">
          سجل لدينا لتصلك جميع العروض ومايصلنا حديثا
        </p>
        <div className="input-group mb-3 email">
          <input
            type="text"
            className="form-control"
            placeholder="البريد الالكتروني . . . ."
            aria-label="Email"
            aria-describedby="button-addon2"
          />
          <button id="button-addon2">اشترك</button>
        </div>
      </div>
    </div>
  );
}
