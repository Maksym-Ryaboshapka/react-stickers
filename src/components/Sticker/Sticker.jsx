import { Component } from "react";

export default class Sticker extends Component {
  render() {
    return (
      <img src={this.props.img} alt="sticker" onClick={this.props.onClick} />
    );
  }
}
