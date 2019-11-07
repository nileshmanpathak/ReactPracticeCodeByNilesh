import * as React from "react";
import { render } from "react-dom";

class Radio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  componentWillMount() {
    // console.log("props ", this.props);
  }
  render() {
    return (
      <div>
        <input
          type="radio"
          value="dog"
          onChange={e => {
            console.log("hi... ", e.target.value);
            this.setState({ value: e.target.value });
            this.props.setRadioValues(e.target.value);
          }}
          checked={this.state.value == "dog"}
        />
        Dog
        <input
          type="radio"
          value="cat"
          onChange={e => {
            console.log("hi... ", e.target.value);
            this.setState({ value: e.target.value });
            this.props.setRadioValues(e.target.value);
          }}
          checked={this.state.value == "cat"}
        />
        Cat
      </div>
    );
  }
}
export default Radio;
