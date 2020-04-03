import React from "react";
import { Link } from "react-router-dom";

export default class AllPinsIndexItem extends React.Component {
  constructor(props) {
    
    super(props);
  }

  render() {
    const { pin, pinId } = this.props;
    return (
      <Link
        to="#"
        onClick={() => this.props.openModal("Show Pin", pinId)}
      >
        <div className="pin-photo">
          <img src={pin.photoUrl} />
        </div>
      </Link>
    );
  }
}
