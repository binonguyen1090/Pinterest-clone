import React from "react";
import { Link } from "react-router-dom";
export default class PinCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      board_id: 0,
      photoFile: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.update = this.update.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchBoards(this.props.currentUser.id);
  }

  handleChange(e) {
    this.setState({ board_id: e.target.value });
  }
  update(v) {
    return (e) => this.setState({ [v]: e.target.value });
  }
  handleFile(e) {
    this.setState({ photoFile: e.currentTarget.files[0] });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("pin[title]", this.state.title);
    formData.append("pin[body]", this.state.body);
    formData.append("pin[photo]", (this.state.photoFile));
    formData.append("pin[board_id]", this.state.board_id);
    this.props.createPin(formData).then(() => this.props.closeModal());
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    if (!this.props.errors) {
      return [];
    }
    
    let choice = this.props.boards.map((board,idx) => {
    return <option key={idx} value={board.id}>{board.title}</option>;
    });

    return (
      <div>
        <div className="all_board">
          <form className="boardform" onSubmit={this.handleSubmit}>
            <div className="titlecreateForm">Create Pin</div>
            <div>
              <input
                className="inputCreateBoard"
                type="text"
                value={this.state.title}
                onChange={this.update("title")}
                placeholder="Topic"
              />
            </div>
            <div>
              <input
                className="inputCreateBoard"
                type="text"
                value={this.state.body}
                onChange={this.update("body")}
                placeholder="Description"
              />
            </div>
            <label>
              <select onChange={this.handleChange}>
                <option> Select board</option>
                {choice}
              </select>
            </label>

            <div>
              <input type="file" onChange={this.handleFile} />
            </div>

            <div className="create-group-btton">
              <button className="canclebutton" onClick={this.props.closeModal}>
                Cancel
              </button>
              <input className="createbutton" type="submit" value="Create" />
            </div>
            <div className="errorInBoardForm">{this.renderErrors()}</div>
          </form>
        </div>
      </div>
    );
  }
}
