import React from 'react'
import { Link } from 'react-router-dom'
import './bseller.css'
import { useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react';
import Loader from "react-loader-spinner";
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
SwiperCore.use([Autoplay]);
export default function Bseller() {
    const { products } = useSelector(state => state.products)
    const imgTag = <img className='best-tag' src='./images/bestseller.png' />
    return products ? (
        <div className={`seller-block`}>
            <h1 className={`globalcenter`}>Best Sellers</h1>
            <div className="seller-head">
                <Swiper
                    loop={true}
                    autoplay={true, { delay: 1000, disableOnInteraction: false }}
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        // when window width is >= 480px
                        480: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        },
                        640: {
                            slidesPerView: 4,
                            spaceBetween: 40
                        },
                        960: {
                            slidesPerView: 5,
                            spaceBetween: 50
                        },
                        1300: {
                            slidesPerView: 6,
                            spaceBetween: 60
                        }
                    }}
                >
                    <SwiperSlide className='seller-item'>
                        <Link to='/tvs'>
                            {imgTag}<img src={products.tvs[1].image} />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className='seller-item'>
                        <Link to='/headphones'>
                            {imgTag}<img src={products.headphones[0].image} />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className='seller-item'>
                        <Link to='/watches'>
                            {imgTag}<img src={products.watches[2].image} />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className='seller-item'>
                        <Link to='/labtops'>
                            {imgTag}<img src={products.labtops[0].image} />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className='seller-item'>
                        <Link to='/tvs'>
                            {imgTag}<img src={products.tvs[0].image} />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className='seller-item'>
                        <Link to='/watches'>
                            {imgTag}<img src={products.watches[0].image} />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className='seller-item'>
                        <Link to='/headphones'>
                            {imgTag}<img src={products.headphones[1].image} />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className='seller-item'>
                        <Link to='/labtops'>
                            {imgTag}<img src={products.labtops[1].image} />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className='seller-item'>
                        <Link to='/tvs'>
                            {imgTag}<img src={products.tvs[2].image} />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className='seller-item'>
                        <Link to='/watches'>
                            {imgTag}<img src={products.watches[1].image} />
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    ) : (
        <Loader type="TailSpin" color="#00BFFF" height={350} width={350} />
    )
}
