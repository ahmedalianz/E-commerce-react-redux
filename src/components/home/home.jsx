import React from 'react'
import Hero from './hero/hero'
import Offers from './offers/offers'
import Shipping from './shipping/shipping'
import Fade from 'react-reveal/Fade';
import Bseller from './bestseller/bseller';
import Catagory from './catagory/catagory';
import Bestprice from './bestprice/bestprice';
import Spectial from './special/special';
import NewsLetter from './newsletter/newsletter';

export default function Home() {
    return (
        <div>
            <Hero />
            <Offers />
            <Fade top>
                <Shipping />
            </Fade>
            <Bseller />
            <Catagory />
            <Fade right>
                <Bestprice />
            </Fade>
            <Fade left>
                <Spectial />
            </Fade>
            <Fade top>
                <NewsLetter />
            </Fade>
        </div>
    )
}
