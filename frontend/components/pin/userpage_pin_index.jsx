import React from "react";
import { Link } from "react-router-dom";
import Profile_container from "../profile/profile_container";
import BoardIndexContainer from "../board/board_index_container";
import PinUserIndexItem from "../pin/user_pins_index_item";

export default class EachUserPins extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchOneUserPins(this.props.userId);
    // this.props.fetchPins(this.props.currentUser.id);
  }

  render() {
    // let userPins = this.props.pins.map((pin, i) => {
    //   return (
    //     <div>
    //       <Link to={`pins/${pin.id}`} key={i}>
    //         {" "}
    //         {pin.title}{" "}
    //       </Link>
    //     </div>
    //   );
    // });

       let id = this.props.match.params.userId;
       let user = this.props.user;
       let name =
         user.fname === null || user.lname === null
           ? user.email
           : user.fname + " " + user.lname;
       let location = user.location === null ? "" : user.location;
           let description = user.description === null ? "" : user.description;

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
              <br/>
              <div className="space-name">{user.description}</div>

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
        </div>
        <div id="abc">
          <div className="masonry">
            <ul>
              {this.props.pins.map((pin, idx) => (
                <PinUserIndexItem
                  key={idx}
                  pin={pin}
                  currentUserId={this.props.currentUserId}
                  user={this.props.user}
                  src={pin.photoUrl}
                  openModal={this.props.openModal}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
