import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import News from './containers/News/News';
import Home from './containers/Home/Home';
import Face from './containers/Face/Face';

class App extends Component {
  constructor(props) {
    super(props);

    //initialize button footer
    this.state = {
      footer:
        this.props.history.location.pathname === "/" ? (
          <div className="App-buttons">
            <button className="App-button-enter" onClick={this.news}>
              News
            </button>
            <button className="App-button-face" onClick={this.face}>
              Face
            </button>
          </div>
        ) : (
          <button className="App-button-back" onClick={this.home}>
            Back
          </button>
        ),
    };
  }

  home = () => {
    this.props.history.push('/');
    this.setState({
      footer: (
        <div className="App-buttons">
          <button className="App-button-enter" onClick={this.news}>
            News
          </button>
          <button className="App-button-face" onClick={this.face}>
            Face
          </button>
        </div>
      ),
    });
  };

  news = () => {
    this.props.history.push('/news');
    this.setState({
      footer: (
        <button className="App-button-back" onClick={this.home}>
          Back
        </button>
      ),
    });
  };

  face = () => {
    this.props.history.push('/face');
    this.setState({
      footer: (
        <button className="App-button-back" onClick={this.home}>
          Back
        </button>
      ),
    });
  };

  render() {
    return (
      <div className="App">
        <div className="App-container">
          <Route path="/" exact component={Home} />
          <Route path="/news" component={News} />
          <Route path="/face" component={Face} />
        </div>
        <div className="App-footer">{this.state.footer}</div>
      </div>
    );
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <div>
    <Router>
      <Route component={App} />
    </Router>
  </div>
);
