import React, { Component } from "react";

class Button extends Component {
  render() {
    return <button className={this.props.text}>{this.props.text}</button>;
  }
}

export default Button;
