// import React, { Component } from "react";

// class Image extends Component {
//   render() {
//     return (
//       <img
//         className={this.props.like ? "liked" : "notLiked"}
//         src={this.props.image}
//         alt={this.props.character}
//       />
//     );
//   }
// }

// export default Image;

import React from "react";

const Image = (props) => {
  return (
    <>
      <img
        className={props.like ? "liked" : "notLiked"}
        src={props.image}
        alt={props.character}
      />
    </>
  );
};

export default Image;
