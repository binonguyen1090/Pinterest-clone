import React from "react";
import { Link } from "react-router-dom";

export default class BoardIndexItem extends React.Component {
  constructor(props) {
    super(props);
   
  }

  render() {
    if (this.props.board.pinPhotos === undefined) {
      return null;
    }
    let arr = this.props.board.pinPhotos.map((pinPhoto, i) => {
      // debugger
      return <img key={i} className="index-list-item" src={pinPhoto} alt="" />;
    }); 
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
          <i id="editboardpen" className="fas fa-pen "></i>
        </Link>
      );
    } else {
      editButton = null;
    }

    const { board, idx } = this.props;
    return (
      <div className="box-index-item">
        <Link to={`/boards/${board.id}`} className="link_to_board_show">
          <div className="item-image">{arr.slice(0, 4)}</div>
        </Link>
        <div className="title-edit">
          <div className="title-board">{board.title}</div>
          <div className="hover-edit-board">{editButton}</div>
        </div>
      </div>
    );
  }
}
