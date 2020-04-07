import React from "react";
import { Link } from "react-router-dom";
import BoardShow from "./board_show";
import BoardIndexItem from "./board_index_items";

export default class UserpageBoardIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBoards(this.props.userId);
  }
  // componentDidUpdate(prevProps) {
  //   debugger
  //   if (prevProps.user.id != this.props.user.id) {
  //     this.props.fetchBoards(this.props.user.id);
  //   }
  // }

  render() {
    if (!this.props.boards) {
      return null;
    }
    if (!this.props.user) {
      return null;
    }
    const {
      boards,
      deleteBoard,
      currentUser,
      openModal,
      closeModal,
    } = this.props;

    return (
      <div>
        <div>
          <ul className="box-index-items-container">
            {boards.map((board, idx) => (
              <BoardIndexItem
                key={idx}
                board={board}
                deleteBoard={this.props.deleteBoard}
                openModal={this.props.openModal}
                currentUserId={this.props.currentUserId}
                user={this.props.user}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
