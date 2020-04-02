import React from "react";
import { Link } from "react-router-dom";

export default class BoardIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let editButton;
    if (this.props.currentUserId === this.props.user.id) {
      editButton = (
        <Link
          to="#"
          className="edit-board-item-edit"
          onClick={() =>
            this.props.openModal("Edit Board", this.props.board.id)
          }
        >
          <i className="fas fa-pen "></i>
        </Link>
      );
    } else {
      editButton = null;
    }

    const { board, idx } = this.props;
    return (
      // <div className="wrapper">

      <div className="box-index-item">
        <Link to={`/boards/${board.id}`} className="link_to_board_show">
          <div className="item-image">
            <h1 className="board_title">{board.title}</h1>
          </div>
        </Link>
        <div className="title-edit">
          <div className="title-board">ID: {board.id}</div>
          <div className="hover-edit-board">{editButton}</div>
        </div>
      </div>

      // </div>
    );
  }
}
