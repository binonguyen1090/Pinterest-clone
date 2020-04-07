import React from "react";
import { Link } from "react-router-dom";
import UserpageBoardIndexContainer from "../board/userpage_board_index_container";
import UserPinContainer from "../pin/user_pins_container";
export default class UserPage extends React.Component {
  constructor(props) {
    
    super(props);
    
  }
  componentDidMount(){
      this.props.getUser(this.props.userId)
  }
  render() {
    let id = this.props.match.params.userId;
    let user = this.props.user;
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
              <div className="space-name">{user.email}</div>
              <div className="location-profile">{location}</div>
            </div>
            <div className="link-on-profile">
              <Link to={`/user/${id}`} className="link-on-profile-1">
                Boards
              </Link>
              <Link to={`/user/${id}/pins`} className="link-on-profile-1">
                Pins
              </Link>
            </div>
          </div>
          <div className="bottomboard">
            <UserpageBoardIndexContainer />
          </div>
        </div>
      </div>
    );
  }
}
