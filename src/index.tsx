import * as React from "react";
import { render } from "react-dom";
import Buttons from "./components/buttons";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello React JS</h1>
      <input type="radio" /> Dog
      <input type="radio" /> Cat
      <Buttons />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
