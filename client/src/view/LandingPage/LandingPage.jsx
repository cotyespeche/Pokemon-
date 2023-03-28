import React from "react";
import { Link } from "react-router-dom";
import style from "./LandingPage.module.css";
import PokeLanding from "../../img/PokeLanding.mp4";

const LandingPage = () => {
  return (
    <div className={style.bodyLanding}>
      <div className={style.landinText1}>
        <h1 className={style.landingWelcome}>WELCOME TO POKEMON'S WORLD</h1>

        <div className={style.landingButton}>
          <Link to="/home">
            <button>GO!</button>
          </Link>
        </div>

        <video autoPlay muted loop className={style.video}>
          <source src={PokeLanding} type="video/mp4"></source>
        </video>
      </div>
    </div>
  );
};

export default LandingPage;
