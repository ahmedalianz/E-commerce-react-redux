import React from 'react'
import ImageGallery from 'react-image-gallery';
import { Container } from './heroBack'
import './hero.css'
export default function Hero() {
    const images = [
        {
            original: 'images/hero/watch.png',
            originalAlt: 'watch',
            originalWidth: '350px',
        }, {
            original: 'images/hero/phone.png',
            originalAlt: 'phone',
            originalWidth: '400px',
        }, {
            original: 'images/hero/labtop.png',
            originalAlt: 'labtop',
            originalWidth: '500px',
        }
    ]
    return (
        <Container>
            <div className='hero-head'>
                <p>Best Prices</p>
                <h1>Incredible Prices on All Your Favorite Items</h1>
                <p>Get more for less on selected brands</p>
                <a href="#catagory"><button>Shop Now</button></a>
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
        </Container>
    )
}
