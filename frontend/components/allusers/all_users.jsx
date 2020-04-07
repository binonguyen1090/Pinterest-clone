import React from "react";
import { Link } from "react-router-dom";
import BoardIndexContainer from "../board/board_index_container";
import UserPinContainer from "../pin/user_pins_container";
import AllUsersItem from "../allusers/all_users_item";
export default class AllUsers extends React.Component {
  constructor(props) {
      
    super(props);
  }
   componentDidMount() {
    this.props.getAllUsers();
  }

  render() {
    // if(this.props.users.length < 1) return null
    const {users} = this.props
     if (!users) {
       return null;
     }
    return (
      <div className="allUser">
        <ul>
          {this.props.users.map((user, idx) => (
            <AllUsersItem
              userId={user.id}
              key={idx}
              user={user}
            />
          ))}
        </ul>
      </div>
    );
  }
}

