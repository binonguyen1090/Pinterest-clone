import React from "react";
import { Link } from "react-router-dom";
import BoardIndexContainer from "../board/board_index_container";
import UserPinContainer from "../pin/user_pins_container";
export default class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let id = this.props.match.params.userId;
    let user = this.props.currentUser;
    let name =
      user.fname === null || user.lname === null
        ? user.email
        : user.fname + " " + user.lname;
    let location = user.location === null ? "" : user.location;
    return (
      <div className="board">
        <div className="topboard">
          <div className="in-topboard">
            <div className="profile-button">
              <div className="dropdown">
                <i className="fas fa-plus"></i>
                <div className="dropdown-content">
                  <button
                    className="dropdownbutton"
                    onClick={() => this.props.openModal("Create Board")}
                  >
                    <p className="dropdownbutton-size">Create Board</p>
                  </button>

                  <button
                    className="dropdownbutton"
                    onClick={() => this.props.openModal("Create Pin")}
                  >
                    <p className="dropdownbutton-size">Create Pin</p>
                  </button>
                </div>
              </div>

              <Link to={`/settings`} className="fa-pen-profile">
                <i className="fas fa-pen "></i>
              </Link>
            </div>
            <div className="info-profile">
              <div className="name-profile">{name}</div>
              {/* <div className="space-name"></div> */}
              <div className="location-profile">{location}</div>
            </div>
            <div className="link-on-profile">
              <Link to={`/users/${id}`} className="link-on-profile-1">
                Boards
              </Link>
              <Link to={`/users/${id}/pins`} className="link-on-profile-1">
                Pins
              </Link>
            </div>
          </div>
        </div>

        <div className="bottomboard">
          <BoardIndexContainer />
        </div>
      </div>
    );
  }
}
