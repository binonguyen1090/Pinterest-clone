import React from "react";
import { Link } from "react-router-dom";

export default class BoardPinIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { pin } = this.props;
    return (
      <Link
        to="#"
        onClick={() => this.props.openModal("Show Pin", pin.id)}
      >
        <div className="pin-photo">
          <img src={pin.photoUrl} />
        </div>
      </Link>
    );
  }
}
