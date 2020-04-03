import React from "react";
import { Link } from "react-router-dom";

export default class PinUserIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let editButton;
    

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
      //  <div className="masonry">
      //   <div className="pin-photo">
      //       <img className="user_pin_item" src={pin.photoUrl} />
      //   </div>
      // </div>
    );
  }
}

