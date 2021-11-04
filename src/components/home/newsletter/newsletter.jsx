import React from 'react'
import './newsletter.css'
export default function NewsLetter() {
    return (<div className={`newsletter-block`}>
        <div className="newsletter-head">
            <h3 className="globalcenter">Newsletter</h3>
            <hr style={{ color: 'white' }} />
            <p className='globalcenter'>Sign up to receive updates on new arrivals and special offers</p>
            <div className="input-group mb-3 email">
                <input type="text" className="form-control"
                    placeholder="E-mail . . . ."
                    aria-label="Email"
                    aria-describedby="button-addon2" />
                <button id="button-addon2">Subscribe</button>
            </div>

        </div></div>
    )
}
