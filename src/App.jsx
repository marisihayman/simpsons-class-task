import React, { Component } from "react";
import axios from "axios";
import Loading from "./components/Loading";
import Data from "./components/Data";

class App extends Component {
  state = {};
  async componentDidMount() {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=5`
    );
    this.setState({ data });
  }

  render() {
    if (!this.state.data) return <p>Loading...</p>;
    return (
      <ol>
        {this.state.data.map((item) => {
          return <li>{item.character}</li>;
        })}
      </ol>
    );
  }
}

export default App;
