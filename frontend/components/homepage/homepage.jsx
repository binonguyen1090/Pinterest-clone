import React from "react";
import { Link } from "react-router-dom";
import AllPinsContainer from "../pin/all_pins_container";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-page-pin">
        <AllPinsContainer />
      </div>
    );
  }
}
