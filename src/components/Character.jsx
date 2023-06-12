import React, { Component } from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";
import Delete from "./Delete";

class Character extends Component {
  state = { like: false };
  onLikeToggle = () => {
    this.setState({ like: !this.state.like });
  };

  charIndexView;

  render() {
    const { character, quote, image, id } = this.props.item;
    const { like } = this.state;

    return (
      <div className="characterCotainer">
        <Name
          character={character}
          like={like}
          onLikeToggle={this.onLikeToggle}
        />
        <Quote quote={quote} />
        <Image image={image} like={like} />
        <Delete onDelete={this.props.onDelete} quote={quote} id={id} />
      </div>
    );
  }
}

export default Character;
