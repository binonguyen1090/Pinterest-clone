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
    const { pin } = this.props;
    return (
        <div className="pin-show wrapper">
          <div className="pin-show container">
            <div className="pinshow-left">
              <img className="board-pin-show" src={pin.photoUrl} />
            </div>
            <div className="pin-show-right">
              <div className="pin-show nav-bar">
                <i className="fas fa-pen"></i>
                <div></div>
                <div className="pin-show save-board-pin-text">Save</div>

              </div>
              <div className="pin-show info">
                <div className="pin-show title">{pin.title}</div>
                <div className="pin-show description">{pin.body}</div>
              </div>
              <div className="pin-show credit">
                Upload by: *_^ (trying to get User id )
                <br/><br/>
                {pin.board_id}
              </div>
            </div>
          </div>
        </div>
    );
  }
}
