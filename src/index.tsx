import * as React from "react";
import { render } from "react-dom";
import Buttons from "./components/buttons";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>React JS demo for beginners...</h1>
      <h3>First select the option and see the sound</h3>
      <Buttons />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
