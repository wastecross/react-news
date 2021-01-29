import React, { Component } from "react";
import "./Cards.css";

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
      color: props.color,
    };
  }

  componentDidMount() {
    this.setState({
      content:
        this.state.content.substring(
          0,
          Math.min(this.state.content.length, 10)
        ) + "...",
    });
  }

  render() {
    return (
      <div className="Cards">
        <a href={this.state.url} target="blank">
          <div className="Card">
            <div className="Card-image">
              <img src={this.state.image} alt="news" />
            </div>
            <div className={`Card-content ${this.state.color}`}>
              <h4 className="Card-h4">{this.state.title}</h4>
              <p>{this.state.content}</p>
              <p>Author: {this.state.author}</p>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default Cards;
