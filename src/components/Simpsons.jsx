// import React, { Component } from "react";
// import Character from "./Character";

// class Simpsons extends Component {
//   render() {
//     const { simpsons } = this.props;

//     return (
//       <>
//         {simpsons.map((item) => {
//           return (
//             <Character
//               item={item}
//               key={item.id}
//               onDelete={this.props.onDelete}
//               onLikeToggle={this.props.onLikeToggle}
//             />
//           );
//         })}
//       </>
//     );
//   }
// }

// export default Simpsons;

import React from "react";
import Character from "./Character";

const Simpsons = (props) => {
  const { simpsons } = props;

  return (
    <>
      {simpsons.map((item) => {
        return (
          <Character
            item={item}
            key={item.id}
            onDelete={props.onDelete}
            onLikeToggle={props.onLikeToggle}
          />
        );
      })}
    </>
  );
};

export default Simpsons;
