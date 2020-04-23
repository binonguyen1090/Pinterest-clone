import React from "react";
import { Link } from "react-router-dom";
import Profile_container from "../profile/profile_container";
import BoardIndexContainer from "../board/board_index_container";
import BoardPinIndexItem from "../pin/board_pin_index_item";

export default class BoardPins extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchOneBoardPins(this.props.match.params.boardId);
  }

  render() {
    const { pins } = this.props;
    if (!pins) {
      return null;
    }

    return (
      <div className="masonry">
        <ul>
          {this.props.pins.map((pin, idx) => (
            <BoardPinIndexItem
              key={idx}
              pin={pin}
              src={pin.photoUrl}
              openModal={this.props.openModal}
              fetchOneBoardPins={this.props.fetchOneBoardPins}
              boardId={this.props.match.params.boardId}
            />
          ))}
        </ul>
      </div>
    );
  }
}
