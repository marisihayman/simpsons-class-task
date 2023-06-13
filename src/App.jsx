import React, { Component } from "react";
import axios from "axios";
import Loading from "./components/Loading";
import Simpsons from "./components/Simpsons";
import "./App.css";

class App extends Component {
  state = {};
  async componentDidMount() {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=5`
    );

    // fixes the API data to have unique ID
    data.forEach((element, index) => {
      element.id = index + Math.random();
    });
    this.setState({ simpsons: data });
  }

  onLikeToggle = (id) => {
    const indexOf = this.state.simpsons.findIndex((char) => {
      return char.id === id;
    });
    const simpsons = [...this.state.simpsons];
    simpsons[indexOf].like = true;
  };

  onDelete = (id) => {
    const indexOf = this.state.simpsons.findIndex((char) => {
      return char.id === id;
    });
    const simpsons = [...this.state.simpsons];
    simpsons.splice(indexOf, 1);
    this.setState({ simpsons });
  };

  render() {
    const { simpsons } = this.state;
    if (!simpsons) return <Loading />;
    if (simpsons.length === 0) return <p>You deleted everything!</p>;
    return (
      <>
        <h1>Total no of liked chars #</h1>
        <Simpsons
          simpsons={simpsons}
          onDelete={this.onDelete}
          onLikeToggle={this.onLikeToggle}
        />
      </>
    );
  }
}
export default App;
