import "./about.css";

import FormContainer from "./form/formcontainer";
import React from "react";

export default function About() {
  return (
    <div className="about-cont">
      <h1 className="globalcenter">من نحن</h1>
      <hr />
      <dir className="container">
        <div className="about-block">
          <div className="about-image">
            <img src="images/about/store.jpg" alt="about" />
          </div>
          {/* <div className='about-text'> */}
          <div className="about-paragraph">
            <h3>عنا ..........</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quia vel harum numquam itaque voluptate voluptatum
              veniam a officia. Sunt nobis fuga et delectus voluptatum neque ut
              repellendus tenetur obcaecati?
            </p>
          </div>
          <div className="about-paragraph paraz-2">
            <h3>عن منتجاتنا ..........</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quia vel harum numquam itaque voluptate voluptatum
              veniam a officia. Sunt nobis fuga et delectus voluptatum neque ut
              repellendus tenetur obcaecati?
            </p>
          </div>
          <div className="about-paragraph paraz-3">
            <h3>الأفضل في السوق ..........</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quia vel harum numquam itaque voluptate voluptatum
              veniam a officia. Sunt nobis fuga et delectus voluptatum neque ut
              repellendus tenetur obcaecati?
            </p>
          </div>
          {/* </div> */}
        </div>
        <hr />
        <h2 className="globalcenter">وظائف</h2>
        <p className="globalcenter">
          ارسل لنا بياناتك وسنتواصل معك عند توفر فرصه مناسبه لك
        </p>
        <div>
          <FormContainer />
        </div>{" "}
      </dir>
    </div>
  );
}
