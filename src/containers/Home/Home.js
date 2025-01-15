import React from "react";
import "./Home.css";
import logoNews from "../../assets/logo-news.png";
import logoFace from "../../assets/logo-face.png";
import logoConvert from "../../assets/logo-convert.png";
import logoSdk from "../../assets/logo-sdk.png";
import logoUpscaler from "../../assets/logo-upscaler.png";
import logoKey from "../../assets/logo-keys.png";
import logo from "../../assets/logo-welcome.png";
import { labels } from "../../fixtures/home.fixture";

const Home = (props) => {
  const logos = {
    news: logoNews,
    face: logoFace,
    convert: logoConvert,
    sdk: logoSdk,
    upscaler: logoUpscaler,
    keys: logoKey,
    home: logo,
  };

  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logos[props.type]} className="Home-logo" alt="logo" />
        <p>{labels[props.type]}</p>
      </header>
    </div>
  );
};

export default Home;
