// import React, { Component } from "react";

// class Name extends Component {
//   render() {
//     const { like } = this.props;
//     return (
//       <div>
//         <p>{this.props.character}</p>
//         <button onClick={() => this.props.onLikeToggle(this.props.id)}>
//           {like ? "Liked" : "Not liked"}
//         </button>
//       </div>
//     );
//   }
// }

// export default Name;

import React from "react";

const Name = (props) => {
  const { like } = props;
  return (
    <div>
      <p>{props.character}</p>
      <button onClick={() => props.onLikeToggle(props.id)}>
        {like ? "Liked" : "Not liked"}
      </button>
    </div>
  );
};

export default Name;
