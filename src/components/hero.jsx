import React from "react";
import "../assets/components/hero.scss";
import image from '../assets/images/desktop-image-hero-1.jpg'
const Hero = () => {
  return (
    <div className='hero'>
        <img src={image} alt="" className='hero--image'/>
      <div className='hero--text'>
        <h1 className="title">Discover innovative ways to decorate</h1>
        <p>
          We provide unmatched quality, comfort, and style for property owners
          across the country. Our experts combine form andnfunction in bringing
          your vision to life. Create a room in your own style with our
          collection and make your property a reflection of you and what you
          love.
        </p>
        <a href="/"> SHOP NOW</a>
      </div>
    </div>
  );
};

export default Hero;
