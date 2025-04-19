import { Component } from "react";

import stickersData from "./stickers.json";

import Sticker from "../Sticker/Sticker";
import Choice from "../Choice/Choice";

import { List, Item } from "./sticker-list.styled";

export default class StickerList extends Component {
  state = {
    label: "",
  };

  render() {
    return (
      <>
        <List>
          {stickersData.map((sticker) => {
            return (
              <Item key={sticker.label}>
                <Sticker
                  img={sticker.img}
                  onClick={() => {
                    this.setState({ label: sticker.label });
                  }}
                />
              </Item>
            );
          })}
        </List>

        <Choice label={this.state.label} />
      </>
    );
  }
}
