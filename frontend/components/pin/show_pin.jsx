import React from "react";
import { Link } from "react-router-dom";
import CreatePinFormContainer from "../pin/create_pin_form_container";
import BoardPinContainer from "../pin/board_pin_container";
export default class PinShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board_id: 0,
      // photoFile: e.currentTarget.files[0],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.handleUnlike = this.handleUnlike.bind(this);
    // this.renderErrors = this.renderErrors.bind(this);
  }
  componentWillUnmount(){
    
    this.props.fetchBoard(this.props.pin.board_id);
  }
  handleUnlike(e) {
    // e.();
    e.preventDefault();
    let pin_id = e.currentTarget.value;
    this.props.unLikePin(pin_id).then(()=>{
      this.props.fetchPin(pin_id)
    });
  }

  handleLike(e) {
    // e.();
    
    e.preventDefault();
    let pin_id = e.currentTarget.value;
    this.props.likePin(pin_id).then(()=>{
      this.props.fetchPin(pin_id)
    });
  }
  componentDidMount() {
    this.props.fetchPin(this.props.pinId);
    this.props.fetchBoard(this.props.pin.board_id);
    this.props.fetchBoards(this.props.currentUser.id);
  }

  handleChange(e) {
    this.setState({ board_id: e.target.value });
  }
  handleSubmit() {
    this.props
      .movePintoBoard(this.props.pin, this.state.board_id)
      .then(() => this.props.closeModal());
  }

  render() {
    
    let edit;
    if (this.props.currentUser.pins) {
    edit = Object.values(this.props.currentUser.pins).map((user_pin, idx) => {
      if (user_pin.id === this.props.pin.id){
        return <i key={idx} className="fas fa-pen"></i>; 
      }; 
    })
    }
    let choice = this.props.boards.map((board, idx) => {
      return (
        <option key={idx} value={board.id}>
          {board.title}
        </option>
      );
    });
    let id;
    let email;
    if (this.props.board !== "") {
      id = this.props.board.user.id;
      email = this.props.board.user.email;
    } else {
      return "";
    }
    const { pin } = this.props;
    return (
      // <div className="pin-show container">
      <div className="pin-show-main">
        {/* <form className="pin-show container" onSubmit={this.handleSubmit}> */}
        <div className="pinshow-left">
          {/* <img className="each-pin-show" src={pin.photoUrl} /> */}
          <img src={pin.photoUrl} />
        </div>
        <div className="pinshow-right">
          <div className="pin-show nav-bar">
            <Link
              className="edit-board-item-edit"
              to="#"
              onClick={() =>
                this.props.openModal("Edit Pin", { pinId: this.props.pin.id })
              }
            >
              {edit}
            </Link>

            {/* <label>
              <select onChange={this.handleChange}>
                <option> Select board</option>
                {choice}
              </select>
            </label>
            <div
              className="pin-show save-board-pin-text"
              onClick={this.handleSubmit}
              type="submit"
            >
              Save
            </div> */}

            {/* <input
                className="pin-show save-board-pin-text"
                type="submit"
                value="Save"
              /> */}
          </div>
          <div className="pin-show info">
            <div className="pin-show title">{pin.title}</div>
            <div className="pin-show description">{pin.body}</div>
          </div>
          <div className="pin-show credit">
            <h1 className="Uploadby">Upload by:</h1>
            <br />
            <Link
              to={`/user/${id}`}
              className="pinowner"
              onClick={() => this.props.closeModal()}
            >
              {email}
            </Link>
          </div>
          <div className="pin-like-show-pin">
            {pin.liked_by_current_user ? (
              <button
                onClick={this.handleUnlike}
                className="unfollow-like"
                value={pin.id}
              >
                <i className="fas fa-heart"></i>
              </button>
            ) : (
              <button
                onClick={this.handleLike}
                className="follow-like"
                value={pin.id}
              >
                <i className="far fa-heart"></i>
              </button>
            )}
            {pin.likes}
          </div>
        </div>
        {/* </form> */}
      </div>
    );
  }
}
