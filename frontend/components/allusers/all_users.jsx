import React from "react";
import { Link } from "react-router-dom";
import BoardIndexContainer from "../board/board_index_container";
import UserPinContainer from "../pin/user_pins_container";
export default class AllUsers extends React.Component {
  constructor(props) {
      debugger
    super(props);
  }

   componentDidMount() {
    this.props.getAllUsers();
  }

  render() {
    debugger
    // if(this.props.users.length < 1) return null
    const {users} = this.props
    return (
      <div className="board">
        <ul>
          {users.map((u, idx) => (
            <li key={idx}>{u.email}</li>
          ))}
        </ul>
      </div>
    );
  }
}
