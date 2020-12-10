import React from "react";
import { NavLink } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing">
      <div className="jumbotron-custom">
        <div className="animate__animated animate__fadeInDown animate__fast">
          <h1 className="display-4 text-light ">Russ Telen</h1>
          <p className="lead text-light">Film Photographer</p>
          <hr className="my-4" />
          <p className="text-light">Vancouver, BC</p>
          <p className="lead">
            <NavLink className="landing-button" to="/filmdiaries">
              See My Work
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
