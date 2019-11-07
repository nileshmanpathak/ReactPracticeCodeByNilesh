import * as React from "react";
// import { render } from "react-dom";
import RadioBtn from "./radio";

class buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sound: ""
    };
    this.setRadioValues = this.setRadioValues.bind(this);
  }
  showPopup = function() {
    alert(`See ${this.state.sound}`);
  };
  setRadioValues = function(value) {
    // console.log("hello ", value);
    if (value == "dog") {
      this.setState({ sound: "Bho bho..." });
    } else if (value == "cat") {
      this.setState({ sound: "Myaou Myaou..." });
    } else {
      this.setState({ sound: "Wrong Number." });
    }
    // console.log("sound is ", this.state.sound);
  };
  render() {
    return (
      <div>
        <RadioBtn setRadioValues={value => this.setRadioValues(value)} />
        <br />
        <button
          className="primary"
          onClick={() => {
            this.showPopup();
          }}
          disabled={this.state.sound == ""}
        >
          Call the Animal
        </button>
      </div>
    );
  }
}
export default buttons;
