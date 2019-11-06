import * as React from "react";
import { render } from "react-dom";

class buttons extends React.Component {
  constructor(props) {
    super(props);
  }
  showPopup = function() {
    // alert("hi");
  };
  render() {
    return (
      <div>
        <button
          className="primary"
          onClick={() => {
            this.showPopup();
          }}
        >
          Click here
        </button>
      </div>
    );
  }
}
export default buttons;
