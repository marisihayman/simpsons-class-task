// import React, { Component } from "react";

// class Delete extends Component {
//   render() {
//     return (
//       <div>
//         <button onClick={() => this.props.onDelete(this.props.id)}>
//           Delete
//         </button>
//       </div>
//     );
//   }
// }

// export default Delete;

import React from "react";

const Delete = (props) => {
  return (
    <div>
      <button onClick={() => props.onDelete(props.id)}>Delete</button>
    </div>
  );
};

export default Delete;
