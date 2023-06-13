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

  render() {
    console.log(this.state.like);
    const { character, quote, image, id, characterDirection } = this.props.item;
    const { like } = this.state;
    if (characterDirection === "Left") {
      return (
        <div className="characterCotainer">
          <Name
            character={character}
            like={this.state.like}
            onLikeToggle={this.onLikeToggle}
            id={id}
          />
          <Image image={image} like={like} />
          <Quote quote={quote} />
          <Delete onDelete={this.props.onDelete} quote={quote} id={id} />
        </div>
      );
    }

    return (
      <div className="characterCotainer">
        <Name
          character={character}
          like={like}
          onLikeToggle={this.onLikeToggle}
        />
        <Quote quote={quote} />
        <Image image={image} like={this.state.like} />
        <Delete onDelete={this.props.onDelete} quote={quote} id={id} />
      </div>
    );
  }
}

export default Character;
