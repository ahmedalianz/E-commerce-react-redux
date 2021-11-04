import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './bseller.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
export default function Bseller() {
    const [loading, setLoading] = useState(true)
    const { products3 } = useContext(LabContext)
    const [labtops, setBestp3] = useState('')
    const { products4 } = useContext(TvContext)
    const [tvs, setBestp4] = useState('')
    const { products5 } = useContext(HeadContext)
    const [heads, setBestp5] = useState('')
    const { products6 } = useContext(WatchContext)
    const [watches, setBestp6] = useState('')
    useEffect(() => {
        if (products3.length > 0) {
            setBestp3([products3[1].image, products3[3].image, products3[1].image])
            setBestp4([products4[1].image, products4[3].image, products4[0].image])
            setBestp5([products5[0].image, products5[2].image])
            setBestp6([products6[0].image, products6[2].image, products6[3].image])
            setLoading(false)
        }
    }, [products3, products5, products4, products6])
    const { darkmode, global } = useContext(DarkModeContext)
    let [modeColor, setModeColor] = useState(global.light)
    let [darkh1, setColor] = useState('')
    useEffect(() => {
        if (!darkmode) {
            setModeColor(global.light)
            setColor('')
        } else {
            setModeColor(global.dark)
            setColor(global.color)
        }
    }, [darkmode])
    const imgTag = <img className='best-tag' src='./images/bestseller.png' />
    return !loading ? (<div className={`seller-block ${modeColor}`}>
        <h1 className={`${darkh1} globalcenter`}>Best Sellers</h1>
        <div className="seller-head">
            <Swiper
                modules={[Autoplay]}
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
                <SwiperSlide className='seller-item'><Link to='/tvs'>{imgTag}<img src={tvs[1]} /></Link>
                </SwiperSlide>
                <SwiperSlide className='seller-item'><Link to='/headphones'>{imgTag}<img src={heads[0]} /></Link>
                </SwiperSlide>
                <SwiperSlide className='seller-item'><Link to='/watches'>{imgTag}<img src={watches[2]} /></Link>
                </SwiperSlide>
                <SwiperSlide className='seller-item'><Link to='/labtops'>{imgTag}<img src={labtops[0]} /></Link>
                </SwiperSlide>
                <SwiperSlide className='seller-item'><Link to='/tvs'>{imgTag}<img src={tvs[0]} /></Link>
                </SwiperSlide>
                <SwiperSlide className='seller-item'><Link to='/watches'>{imgTag}<img src={watches[0]} /></Link>
                </SwiperSlide>
                <SwiperSlide className='seller-item'><Link to='/headphones'>{imgTag}<img src={heads[1]} /></Link>
                </SwiperSlide>
                <SwiperSlide className='seller-item'><Link to='/labtops'>{imgTag}<img src={labtops[1]} /></Link>
                </SwiperSlide>
                <SwiperSlide className='seller-item'><Link to='/tvs'>{imgTag}<img src={tvs[2]} /></Link>
                </SwiperSlide>
                <SwiperSlide className='seller-item'><Link to='/watches'>{imgTag}<img src={watches[1]} /></Link>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
    ) : (<div className='globalcenter'><Spinner /></div>)
}
