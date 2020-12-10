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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit
          nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus
          pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla
          aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur
          id nec massa.
        </p>
      </div>
    </div>
  );
};

export default About;
