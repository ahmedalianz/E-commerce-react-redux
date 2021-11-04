import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './help.css'
export default function HelpWoman() {
    const [none, setNone] = useState('')
    const nohelp = () => {
        setNone('none')
    }
    return (
        <div className={`help-block ${none}`}>
            <img className="help-woman" src='images/wo.png' />
            <div className='help-text'>
            <button onClick={nohelp} className="close">X</button>
                <h1>Need Help? Check Out Our Help Center</h1>
                <Link onClick={nohelp} className="help-link" to="/help"><button className="help-button">Help Center</button></Link>
            </div>
        </div>
    )
}
