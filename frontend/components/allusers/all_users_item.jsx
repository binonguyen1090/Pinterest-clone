import React from "react";
import { Link } from "react-router-dom";

export default class AllPinsIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    const { user, userId } = this.props;
    return (
      
      <div className="all_users_container">
        <Link to={`user/${userId}`}>
          <div className="pin-photo">{user.email}</div>
        </Link>
      </div>
    );
  }
}
