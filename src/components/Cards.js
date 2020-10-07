import React, { Component } from 'react';
import './Cards.css';

class Cards extends Component {
  constructor(props) {
    super(props);

    //initialize state of news
    this.state = {
      title: props.title,
      content: props.content,
      image: props.image,
      author: props.author,
      url: props.url,
    };
  }

  componentDidMount() {
    this.setState({
      content:
        this.state.content.substring(
          0,
          Math.min(this.state.content.length, 10)
        ) + '...',
    });
  }

  render() {
    return (
      <div className="Cards">
        <a href={this.state.url} target="blank">
          <div className="Card">
            <img className="Cards-image" src={this.state.image} alt="news" />
            <p className="Cards-p">{this.state.author}</p>
            <h4 className="Cards-h4">{this.state.title}</h4>
            <p className="Cards-p">{this.state.content}</p>
          </div>
        </a>
      </div>
    );
  }
}

export default Cards;
