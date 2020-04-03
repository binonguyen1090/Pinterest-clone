import React from "react";
import { Link } from "react-router-dom";

export default class AllPinsIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { pin } = this.props;
    return (
      <Link
          to="#"
          className="edit-board-item-edit"
          onClick={() =>
            this.props.openModal("Show Pin", pin.id)
          }
        >
          <div className="pin-photo">
            <img src={pin.photoUrl} />
          </div>
        </Link>
          
    );
  }
}
