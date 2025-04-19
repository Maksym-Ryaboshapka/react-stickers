import { Component } from "react";

import { Label } from "./choice.styled";

export default class Choice extends Component {
  render() {
    return <Label>{this.props.label}</Label>;
  }
}
