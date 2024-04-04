import React from "react";
import "./Home.css";
import logoNews from "../../assets/logo-news.png";
import logoFace from "../../assets/logo-face.png";
import logoConvert from "../../assets/logo-convert.png";
import logoSdk from "../../assets/logo-sdk.png";
import logoUpscaler from "../../assets/logo-upscaler.png";
import logo from "../../assets/logo-welcome.png";
import { labels } from "../../fixtures/home.fixture";

const Home = (props) => {
  return (
    <div className="Home">
      <header className="Home-header">
        <img
          src={
            props.type === "news"
              ? logoNews
              : props.type === "face"
              ? logoFace
              : props.type === "convert"
              ? logoConvert
              : props.type === "sdk"
              ? logoSdk
              : props.type === "upscaler"
              ? logoUpscaler
              : logo
          }
          className="Home-logo"
          alt="logo"
        />
        <p>
          {props.type === "news"
            ? labels.welcomeNews
            : props.type === "face"
            ? labels.welcomeFace
            : props.type === "convert"
            ? labels.welcomeConvert
            : props.type === "sdk"
            ? labels.welcomeSdk
            : props.type === "upscaler"
            ? labels.welcomeUpscaler
            : labels.welcome}
        </p>
      </header>
    </div>
  );
};

export default Home;
