import React from "react";

import Hero from "./BodyParts/Hero";
import TileSection from "./BodyParts/TileSection";

import "../style/body.css";

function Body() {
  return (
    <div className="body-part">
      <Hero />
      <TileSection />
    </div>
  );
}

export default Body;
