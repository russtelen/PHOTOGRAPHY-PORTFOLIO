import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="background-frame row my-5">
        <div className="about-container x-4 pt-4 col-lg-6">
          <img
            className="about-img"
            src="https://russtelen-photoportfolio.s3.ca-central-1.amazonaws.com/aboutme.jpg"
            alt="film diaries"
          />
          <p className="about-title animate__animated animate__fadeInDown">
            About Me
          </p>
        </div>

        <p className="about-desc mt-2 container col-lg-6 animate__animated animate__pulse">
          Hi my name's Russ! Film photographer based in Vancouver, BC. I have
          recently come to the conclusion that I am addicted to taking photos...
          for which there is no known cure, other than to take more. Follow me
          through this journey as I capture the world one click at a time. A
          journey where you relive a moment in the past.
        </p>
      </div>
    </div>
  );
};

export default About;
