import "./contact.css";

import HelpForm from "./helpform";
import React from "react";

export default function Contact() {
  return (
    <div className="contact-cont">
      <h1 className="globalcenter">تواصل معنا</h1>
      <hr />
      <div className="contact-block">
        <div className="opening-block">
          <div className="opening-item1">
            <h3>ساعات العمل</h3>
            <h6>الأحد-الخميس : 8 صباحا - 8 مساءا</h6>
            <h6>الجمعه : 1 مساءا - 12 صباحا</h6>
            <h6>السبت : 9 صباحا - 9 مساءا</h6>
          </div>
          <div className="opening-item2">
            <h3>عناوين الموزعين</h3>
            <h6>شارع 26 يوليو, قسم قصر النيل، محافظة القاهرة </h6>
            <h6>الهرم، أولى الهرم، قسم العمرانية، الجيزة</h6>
            <h6>
              صلاح الدين عبد الكريم، قسم أول القاهرة الجديدة، محافظة القاهرة
            </h6>
          </div>
        </div>
        <div className="form-blockz">
          <h3>نحن هنا لمساعدتك !</h3>
          <p>يمكنك ترك لنا رساله وسيتم الرد عليك بااسرع مايمكننا</p>
          <hr />
          <HelpForm />
        </div>
      </div>
    </div>
  );
}
