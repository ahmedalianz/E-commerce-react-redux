import React from 'react'
import './offer.css'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';

export default function Offers() {

    return (
        <div className={`container-fluid offers-section `}>
            <div className='offer-image-block'>
                <Fade left>
                    <div className='offer-image-item'>
                        <div className="card">
                            <div className='image-holderz'>
                                <img src="images/offer/phone1.jpg" className="card-img-top" alt="phone" /></div>
                            <div className="offers-head card-body">
                                <div className=' card-text'>
                                    <h1 id='phoneofferh1'>Enjoy The Lateset Technologies</h1>
                                </div>
                                <button id='phonebutton'><Link id='button-link1' to='/phones'>Shop Now</Link></button>
                            </div>
                        </div>
                    </div>
                </Fade>
                <Fade right>
                    <div className='offer-image-item'>
                        <div className="card">
                            <div className='image-holderz zx'>
                                <img id='headphone-image-offer' src="images/offer/headphone1.jpg" className="card-img-top" alt="headphone" />
                            </div>
                            <div className="offers-head card-body">
                                <div className=' card-text'>
                                    <h1 id='headphoneofferh1'>Take Your Sound Anywhere</h1>
                                </div>
                                <button id='headphonebutton'><Link id='button-link2' to='/headphones'>Shop Now</Link></button>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}
