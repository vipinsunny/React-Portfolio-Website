import "./HeroImgStyle.css";

import React from 'react'
import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";
import ProfilePhoto from "../../src/assets/IMG_7042.JPG"
const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <img src={ProfilePhoto} alt="Vipin Profile" className="profile-photo" />
        <p>HI, I'M VIPIN.</p>
        <h1>MEARN Stack Developer.</h1>
        <div>
          <Link to="/project" className="btn">
            Project
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );

};

export default HeroImg

