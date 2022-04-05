import Bestprice from "./bestprice/bestprice";
import Bseller from "./bestseller/bseller";
import Catagory from "./catagory/catagory";
import Fade from "react-reveal/Fade";
import Hero from "./hero/hero";
import NewsLetter from "./newsletter/newsletter";
import Offers from "./offers/offers";
import React from "react";
import Shipping from "./shipping/shipping";
import Spectial from "./special/special";

export default function Home() {
  return (
    <div>
      <Hero />
      <Offers />
      <Catagory />
      <Bseller />
      <Fade right>
        <Bestprice />
      </Fade>
      <Fade left>
        <Spectial />
      </Fade>
      <Shipping />
      <NewsLetter />
    </div>
  );
}
