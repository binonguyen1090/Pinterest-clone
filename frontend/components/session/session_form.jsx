import React from 'react'

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // renderErrors(){
  //     return (
  //       <ul>
  //         {this.props.errors.map((error) => (
  //          {error}
  //         ))}
  //       </ul>
  //     );
  // };

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
    );
  }
  update(type) {
    return e => {
      this.setState({ [type]: e.target.value });
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  render() {
    return (
      <div>
        {/* <h1>{this.props.formType}</h1> or {this.props.navLink} */}
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="text"
              value={this.state.password}
              onChange={this.update("password")}
            />
          </label>
          <button type="submit">{this.props.formType}</button>
        </form>
      </div>
    );
  }
}
  export default SessionForm;