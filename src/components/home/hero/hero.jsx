import "./hero.css";

import { Container } from "./heroBack";
import ImageGallery from "react-image-gallery";
import React from "react";

export default function Hero() {
  const images = [
    {
      original: "images/hero/watch.png",
      originalAlt: "watch",
      originalWidth: "350px",
    },
    {
      original: "images/hero/phone.png",
      originalAlt: "phone",
      originalWidth: "400px",
    },
    {
      original: "images/hero/labtop.png",
      originalAlt: "labtop",
      originalWidth: "500px",
    },
  ];
  return (
    <Container>
      <div className="container">
        <div className="hero-box">
          <div className="hero-head">
            <p>أفضل الاسعار</p>
            <h1 className="my-4">أسعار تنافسيه علي كل منتجاتك المفضله</h1>
            <p>أحصل علي كل ماتريد بااأقل الاسعار</p>
            <a href="#catagory">
              <button>تسوق الآن</button>
            </a>
          </div>
          <div className="hero-image-block">
            <ImageGallery
              items={images}
              infinite={true}
              autoPlay={true}
              showNav={false}
              showThumbnails={false}
              showPlayButton={false}
              showFullscreenButton={false}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
