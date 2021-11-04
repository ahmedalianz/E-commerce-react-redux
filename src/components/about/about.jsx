import React from 'react'
import FormContainer from './form/formcontainer'
import './about.css'
export default function About() {
    return (
        <div >
            <h1 className="globalcenter">About Store</h1>
            <hr />
            <div className="about-block">
                <div className="about-image">
                    <img src="images/about/store.jpg" alt="about" />
                </div>
                {/* <div className='about-text'> */}
                <div className='about-paragraph'>
                    <h3>About Us ..........</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perferendis quia vel harum numquam itaque voluptate voluptatum
                        veniam a officia. Sunt nobis fuga et delectus voluptatum neque ut
                        repellendus tenetur obcaecati?</p></div>
                <div className='about-paragraph paraz-2'>
                    <h3>About Our Products ..........</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perferendis quia vel harum numquam itaque voluptate voluptatum
                        veniam a officia. Sunt nobis fuga et delectus voluptatum neque ut
                        repellendus tenetur obcaecati?</p></div>
                <div className='about-paragraph paraz-3'>
                    <h3>Best in The Market ..........</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perferendis quia vel harum numquam itaque voluptate voluptatum
                        veniam a officia. Sunt nobis fuga et delectus voluptatum neque ut
                        repellendus tenetur obcaecati?</p></div>
                {/* </div> */}
            </div>
            <hr />
            <h2 className="globalcenter">Careers</h2>
            <p className="globalcenter">Check out our job postings & opportunities waiting for you</p>
            <div>
                <FormContainer />
            </div>
        </div>
    )
}
