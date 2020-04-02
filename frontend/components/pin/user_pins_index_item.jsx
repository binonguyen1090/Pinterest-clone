import React from "react";
import { Link } from "react-router-dom";

export default class PinUserIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let editButton;
    if (this.props.currentUserId === this.props.user.id) {
      editButton = (
        <Link
          to="#"
          className="edit-board-item-edit"
          onClick={() =>
            this.props.openModal("Edit Board", this.props.board.id)
          }
        >
          <i className="fas fa-pen "></i>
        </Link>
      );
    } else {
      editButton = null;
    }

    const { pin } = this.props;
    return (
      <div className="user_pins_box">
        <img className="user_pin_item" src={pin.photoUrl} />
      </div>
    );
  }
}

