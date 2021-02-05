import React, { Component } from 'react';
import './Home.css';
import logo from '../../assets/logo-news.png';
import { labels } from '../../fixtures/home.fixture';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <p>{labels.welcomeNews}</p>
        </header>
      </div>
    );
  }
}

export default Home;
