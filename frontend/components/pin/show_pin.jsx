import React from "react";
import { Link } from "react-router-dom";
import CreatePinFormContainer from "../pin/create_pin_form_container";
import BoardPinContainer from "../pin/board_pin_container";

export default class PinShow extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchPin(this.props.pinId);
    this.props.fetchBoard(this.props.pin.board_id);

  }
  render() {
    debugger
    const { pin } = this.props;
    return (
      <div className="pin-show-box">
        <div className="pinshow-left">
          <img className="board-pin-show" src={pin.photoUrl} />
        </div>
        <div className="pinshow-right">
          <div>
            
          </div>
          <h1>Title</h1>
            {pin.title}
          <h2>Body</h2>
            {pin.body}
        </div>
      </div>
    );
  }
}
