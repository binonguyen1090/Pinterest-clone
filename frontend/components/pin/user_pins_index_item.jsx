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
      
      <div className="pin-photo">
          <img src={pin.photoUrl} />
        </div>
      //  <div className="masonry">
      //   <div className="pin-photo">
      //       <img className="user_pin_item" src={pin.photoUrl} />
      //   </div>
      // </div>
    );
  }
}

