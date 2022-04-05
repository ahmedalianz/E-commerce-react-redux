import "./bseller.css";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import React from "react";
import { useSelector } from "react-redux";

SwiperCore.use([Autoplay]);
export default function Bseller() {
  const { products } = useSelector((state) => state.products);
  const bestSellerTag = (
    <img className="best-tag" src="/images/bestseller.png" alt="" />
  );
  return products ? (
    <div className={`seller-block py-4`}>
      <h1 className={`globalcenter`}>الأفضل مبيعاً</h1>
      <div className="seller-head container">
        <Swiper
          loop={true}
          autoplay={(true, { delay: 1000, disableOnInteraction: false })}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            960: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
            1300: {
              slidesPerView: 6,
              spaceBetween: 60,
            },
          }}
        >
          {console.log(products.tvs)}
          <SwiperSlide className="seller-item">
            <Link to="/tvs">
              {bestSellerTag}
              <img src={products.tvs[0].image} alt="" />
            </Link>
          </SwiperSlide>
          <SwiperSlide className="seller-item">
            <Link to="/headphones">
              {bestSellerTag}
              <img src={products.headphones[0].image} alt="" />
            </Link>
          </SwiperSlide>
          <SwiperSlide className="seller-item">
            <Link to="/watches">
              {bestSellerTag}
              <img src={products.watches[0].image} alt="" />
            </Link>
          </SwiperSlide>
          <SwiperSlide className="seller-item">
            <Link to="/labtops">
              {bestSellerTag}
              <img src={products.labtops[0].image} alt="" />
            </Link>
          </SwiperSlide>
          <SwiperSlide className="seller-item">
            <Link to="/tvs">
              {bestSellerTag}
              <img src={products.tvs[0].image} alt="" />
            </Link>
          </SwiperSlide>
          <SwiperSlide className="seller-item">
            <Link to="/watches">
              {bestSellerTag}
              <img src={products.watches[0].image} alt="" />
            </Link>
          </SwiperSlide>
          <SwiperSlide className="seller-item">
            <Link to="/headphones">
              {bestSellerTag}
              <img src={products.headphones[0].image} alt="" />
            </Link>
          </SwiperSlide>
          <SwiperSlide className="seller-item">
            <Link to="/labtops">
              {bestSellerTag}
              <img src={products.labtops[0].image} alt="" />
            </Link>
          </SwiperSlide>
          <SwiperSlide className="seller-item">
            <Link to="/tvs">
              {bestSellerTag}
              <img src={products.tvs[0].image} alt="" />
            </Link>
          </SwiperSlide>
          <SwiperSlide className="seller-item">
            <Link to="/watches">
              {bestSellerTag}
              <img src={products.watches[0].image} alt="" />
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  ) : (
    <div className="d-flex justify-content-center">
      <Loader type="TailSpin" color="#00BFFF" height={350} width={350} />
    </div>
  );
}
