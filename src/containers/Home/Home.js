import React from 'react';
import './Home.css';
import logoNews from '../../assets/logo-news.png';
import logoFace from '../../assets/logo-face.png';
import logo from '../../assets/logo-welcome.png';
import { labels } from '../../fixtures/home.fixture';

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
            : labels.welcome}
        </p>
      </header>
    </div>
  );
};

export default Home;
