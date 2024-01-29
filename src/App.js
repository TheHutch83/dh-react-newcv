import React, { Component } from "react";
import Button from "./components/button";

class App extends Component {
  render() {
    return (
      <>
        <Button text={"Button 1"} class="Important" />
        <Button text={"Button 2"} class="Danger" />
        <Button text={"Button 3"} class="Demo" />
      </>
    );
  }
}

export default App;
