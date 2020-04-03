import React from "react";
import { Link } from "react-router-dom";
import Profile_container from "../profile/profile_container";
import BoardIndexContainer from "../board/board_index_container";
import AllPinsIndexItem from "../pin/all_pins_index_item";

export default class AllPins extends React.Component {
  constructor(props) {
    // debugger
    super(props);
  }
  componentDidMount() {
    this.props.fetchAllUsersPins();
  }

  render() {
    // debugger
    const { pins } = this.props;
    if (!pins) {
      return null;
    }

    return (
      <ul>
        {this.props.pins.map((pin, idx) => (
          <AllPinsIndexItem
            key={idx}
            pin={pin}
            src={pin.photoUrl}
            openModal={this.props.openModal}
          />
        ))}
      </ul>
    );
  }
}
