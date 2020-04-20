import React from "react";
export default class EditPinForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.pin;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault(),
      // this.props.updatePin(this.state)
      this.props.updatePin(this.state).then(this.props.closeModal);
  }

  update(v) {
    return (e) => this.setState({ [v]: e.target.value });
  }

  render() {
    debugger;
    return (
      <div>
        <div className="all_board">
          <form className="boardform" onSubmit={this.handleSubmit}>
            <div className="titlecreateForm">Edit Pin</div>
            <div>
              <input
                className="inputCreateBoard"
                type="text"
                value={this.state.title}
                onChange={this.update("title")}
              />
            </div>
            <div>
              <input
                className="inputCreateBoard"
                type="text"
                value={this.state.body}
                onChange={this.update("body")}
              />
            </div>
            <div className="create-group-btton">
              <button className="canclebutton" onClick={this.props.closeModal}>
                Cancle
              </button>
              <input className="createbutton" type="submit" value="Update" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
