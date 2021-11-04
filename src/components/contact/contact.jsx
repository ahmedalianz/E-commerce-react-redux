import React from 'react'
import './contact.css'
import HelpForm from './helpform'
export default function Contact() {
    return (
        <div>
            <h1 className="globalcenter">Get In Touch</h1>
            <hr />
            <div className="contact-block">
                <div className='opening-block'>
                    <div className='opening-item1'>
                        <h3>Opening Hours</h3>
                        <h6>Mon-Fri : 8 Am - 8 Pm</h6>
                        <h6>Saturday : 9 Am - 7 Pm</h6>
                        <h6>Sunday : 9 Am - 8 Pm</h6>
                    </div>
                    <div className='opening-item2'>
                        <h3>Store Location</h3>
                        <h6>Adress 1 </h6>
                        <h6>Adress 2</h6>
                        <h6>Adress 3</h6>
                    </div>
                </div>
                <div className='form-blockz'>
                    <h3>We're here to help!</h3>
                    <p>Fill out the form with any quarry on your mind and we'll get back to you as soon as possible </p>
                    <hr />
                    <HelpForm />
                </div>
            </div>
        </div>
    )
}
