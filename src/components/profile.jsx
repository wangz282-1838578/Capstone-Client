import React from "react";
import recycle from "../photos/pablo-859.jpg";
import { Link } from "react-router-dom";
import Copyright from "./Copyright";

const profile = () => {
  return (
    <main>
      <div id="landing-page">
        <div id="home">
          <div id="home-caption">
            <h1>Pawdy, the pet sitting designed for UW Huskies.</h1>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <Link to="/posts">
              <button className="btn btn-main">Explore More</button>
            </Link>
          </div>
          <div id="home-img">
            <img src={recycle} alt="dog play with a human" />
          </div>
        </div>
      </div>

      <Copyright />
    </main>
  );
};

export default profile;