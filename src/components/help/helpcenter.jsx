import React from 'react'
import './help.css'
export default function HelpCenter() {
  return (
    <div>
      <h1 className="globalcenter">Help Center</h1>
      <h2>Frequently Asked Questions :</h2>
      <div className="accordion help-center" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className={`accordion-button`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Can I use Visa to Buy Products?
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className={` accordion-body`}>
              <strong>Of Course.</strong>It's Highly recommended to use Visa Cards ,it makes the process of buying Easier ,Have a nice Day.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className={`accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Question #2
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className={` accordion-body`}>
              <strong>Answer.</strong> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptatibus, temporibus sequi obcaecati cum adipisci labore sint molestias veritatis fuga. Fuga labore accusamus ipsum illum animi vero voluptatem, laboriosam perspiciatis!
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className={`accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Question #3
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className={`accordion-body`}>
              <strong>Answer.</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit saepe officiis voluptatum aspernatur autem dolore maiores aperiam laborum aut? Nihil culpa, architecto veniam quam sapiente sint voluptate beatae aut vel?.
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
