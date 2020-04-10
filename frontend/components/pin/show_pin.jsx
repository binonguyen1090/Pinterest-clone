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
    // this.renderErrors = this.renderErrors.bind(this);

  }
  componentDidMount() {
    this.props.fetchPin(this.props.pinId);
    this.props.fetchBoard(this.props.pin.board_id);  
    this.props.fetchBoards(this.props.currentUser.id);

  }
  
//  renderErrors() {
//     return (
//       <ul>
//         {this.props.errors.map((error, idx) => (
//           <li key={idx}>{error}</li>
//         ))}
//       </ul>
//     );
//   }

  handleChange(e) {
    this.setState({ board_id: e.target.value });
  }
  handleSubmit() {
    // debugger
    // const formData1 = new FormData();
    // formData1.append("pin[title]", this.props.pin.title);
    // formData1.append("pin[body]", this.props.pin.body);
    // formData1.append("pin[photo]", this.state.photoFile);
    // formData1.append("pin[board_id]", this.state.board_id);
    
    // this.props.createPin(formData1).then(() => this.props.closeModal());
    this.props.movePintoBoard(this.props.pin, this.state.board_id).then(() => this.props.closeModal());
    
  }

  render() {
    // debugger
      // if (!this.props.errors) {
      //   return [];
      // }
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
    }else{
      return ""
    }
    const { pin } = this.props;
    return (
      <div className="pin-show container">
        {/* <form className="pin-show container" onSubmit={this.handleSubmit}> */}
          <div className="pinshow-left">
            <img className="board-pin-show" src={pin.photoUrl} />
          </div>
          <div className="pinshow-right">
            <div className="pin-show nav-bar">
              <i className="fas fa-pen"></i>
              <label>
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
            </div>

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
              {/* <div className="errorInBoardForm">{this.renderErrors()}</div> */}
            </div>
          </div>
        {/* </form> */}
      </div>
    );
  }
}
