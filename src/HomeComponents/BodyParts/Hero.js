import React from "react";
import logo from "../Logonetflix.png";

function Hero() {
  return (
    <div className="hero">
      <img className="hero-img" src={logo} alt="HeroImg" />
      <div>
        <h1 className="heading">Watch now!</h1>
        <div className="sub-heading">Enjoy on your TV.</div>
        <div className="sub-heading">
          Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
          players, and more.
        </div>
      </div>
    </div>
  );
}

export default Hero;
