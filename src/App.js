import { Component } from "react";

import StickerList from "./components/StickerList/StickerList";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <StickerList />
      </div>
    )
  }
}