import React from "react";
import { Link } from "react-router-dom";

export default class AllPinsIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    const { user, userId } = this.props;
    return (
      <Link to={`user/${userId}`}>
        <div className="pin-photo">
          {user.email}
        </div>
      </Link>
    );
  }
}
