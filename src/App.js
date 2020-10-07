import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import News from './containers/News/News';
import Home from './containers/Home/Home';

class App extends Component {
  constructor(props) {
    super(props);

    //initialize button footer
    this.state = {
      footer:
        this.props.history.location.pathname === '/news' ? (
          <button className="App-button-back" onClick={this.home}>
            Back
          </button>
        ) : (
          <button className="App-button-enter" onClick={this.news}>
            Enter
          </button>
        ),
    };
  }

  home = () => {
    this.props.history.push('/');
    this.setState({
      footer: (
        <button className="App-button-enter" onClick={this.news}>
          Enter
        </button>
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

  render() {
    return (
      <div className="App">
        <div className="App-container">
          <Route path="/" exact component={Home} />
          <Route path="/news" component={News} />
        </div>
        <div className="App-footer">{this.state.footer}</div>
      </div>
    );
  }
}

export default () => (
  <div>
    <Router>
      <Route component={App} />
    </Router>
  </div>
);
