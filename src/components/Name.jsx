import React, { Component } from "react";

class Name extends Component {
  render() {
    const { like } = this.props;
    return (
      <div>
        <p>{this.props.character}</p>
        <button onClick={this.props.onLikeToggle}>
          {like ? "Liked" : "Not liked"}
        </button>
      </div>
    );
  }
}

export default Name;
