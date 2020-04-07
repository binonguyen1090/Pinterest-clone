import React from "react";
import { Link } from "react-router-dom";
import CreatePinFormContainer from "../pin/create_pin_form_container";
import BoardPinContainer from "../pin/board_pin_container";

export default class BoardShow extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchBoard(this.props.match.params.boardId);
  }
  render() {
    const { board } = this.props;
    if (!board) {
      return null;
    }

    let user = this.props.currentUser;
    let name =
      user.fname === null || user.lname === null
        ? user.email
        : user.fname + " " + user.lname;
    user.location === null ? "" : user.location;

    return (
      <div className="board">
        <div className="topboard">
          <Link to={`/users/${this.props.currentUserId}`}>
            <i className="fas fa-long-arrow-alt-left"></i>
          </Link>

          <div className="in-topboard">
            <div className="profile-button">
              <div className="dropdown">
                <i className="fas fa-plus"></i>
                <div className="add-pin-in-show-board">Add Pin</div>
                <div className="dropdown-content">
                  <button
                    className="dropdownbutton"
                    onClick={() => this.props.openModal("Create Pin")}
                  >
                    <p className="dropdownbutton-size">Create Pin</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="info-profile">
              
              <div className="name-show-board">
                {board.title}
                
              </div>
            </div>
          </div>
        </div>

        <div>
          <BoardPinContainer />
        </div>
      </div>
    );
  }
}

