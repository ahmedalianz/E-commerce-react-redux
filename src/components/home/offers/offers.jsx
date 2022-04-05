import "./offer.css";

import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import React from "react";

export default function Offers() {
  return (
    <div className={`offers-section `}>
      <div className="container">
        <div className="offers-block">
          <Fade right>
            <div className="offer-item">
              <div className="card">
                <div className="image-holderz">
                  <img
                    src="images/offer/phone1.jpg"
                    className="card-img-top"
                    alt="phone"
                  />
                </div>
                <div className="offers-head card-body">
                  <div className=" card-text">
                    <h1 id="phoneofferh1">تمتع باأحدث التكنولوجيا</h1>
                  </div>
                  <button id="phonebutton">
                    <Link id="button-link1" to="/phones">
                      تسوق الآن
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </Fade>
          <Fade left>
            <div className="offer-item">
              <div className="card">
                <div className="image-holderz zx">
                  <img
                    id="headphone-image-offer"
                    src="images/offer/headphone1.jpg"
                    className="card-img-top"
                    alt="headphone"
                  />
                </div>
                <div className="offers-head card-body">
                  <div className=" card-text">
                    <h1 id="headphoneofferh1">تمتع بالموسيقي في اي مكان</h1>
                  </div>
                  <button id="headphonebutton">
                    <Link id="button-link2" to="/headphones">
                      تسوق الآن
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </Fade>
        </div>{" "}
      </div>
    </div>
  );
}
