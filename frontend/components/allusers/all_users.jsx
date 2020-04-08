import React from "react";
import { Link } from "react-router-dom";
import BoardIndexContainer from "../board/board_index_container";
import UserPinContainer from "../pin/user_pins_container";
import AllUsersItem from "../allusers/all_users_item";
import user_pins_container from "../pin/user_pins_container";
export default class AllUsers extends React.Component {
  constructor(props) {
      
    super(props);
    this.handleClick = this.handleClick.bind(this);

  }
   componentDidMount() {
    this.props.getAllUsers();
  }

  handleClick(e){
      e.preventDefault()
      const formId = e.currentTarget.value
      this.props.destroyForm(formId)
  }
  render() {
    // if(this.props.users.length < 1) return null
    const {users} = this.props
     if (!users) {
       return null;
     }
     const user = this.props.users.map((user) => (
       <div key={user.id}>
         <Link id='link-forms' to={`/user/${user.id}`} >
         <div className="form-index-form">
           <strong>
             {user.fname + " " + user.lname}
           </strong>
           <div id="form-footer">
             <div>{user.email}</div>
             <button onClick={this.handleClick} value={1} >Follow</button>
           </div>
         </div>
         </Link>
       </div>
     ));
    return (
      <div className="user-form-out">
        <div id="user-form-header">
          <h1>Community</h1>
        </div>
        <div className="users-follow">
          Followers:
          Following:
        </div>
        <div id="form-item-padding">
          <div className="form-item" key={user.id}>
            {user}
          </div>
        </div>
      </div>
    );
  }
}

