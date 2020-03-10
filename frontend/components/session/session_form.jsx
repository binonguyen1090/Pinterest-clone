import React from 'react'
import { Link } from "react-router-dom";


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }
  componentDidMount() {
    this.props.clearError();
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

  update(type) {
    return e => {
      this.setState({ [type]: e.target.value });
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }


  handleDemo(e) {
    e.preventDefault();
    const user = { email: "special_999@gmail.com", password: "123123" };
    this.props.processForm(user).then(this.props.closeModal);
  }

  render() {
    return (
      <div>
        
        <div className="all_session">
        <form className="sessionform" onSubmit={this.handleSubmit}>



          <div className="lds-circle">
            <img className="session_logo_img" src={window.favicon} />
          </div>
            {/* <div class="lds-circle"><div></div></div> */}


          <h3 className="session_title">Welcome to B-interest</h3>
          <div>
            <div>
              {this.props.formType !== "Log in"
                ? "Sign Up! It’s quick and easy."
                : ""}
            </div>


            <input
              type="email"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="Email"
            />
          </div>

          <div>
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Enter Password"
            />
          </div>

        

          <div className="forgot_password">
            {this.props.formType === "Log in" ? "Forgot your password?" : ""}
          </div>
          <div>
            <input
              className="session_button"
              type="submit"
              value={this.props.formType === "Log in" ? "Log In" : "Continue"}
              onChange={this.update("password")}
            />
          </div>
          <div>
            {this.props.formType === "Log in" ? (
              <input
                className="session_button demo"
                type="submit"
                value={"DEMO USER"}
                onClick={this.handleDemo}
              />
            ) : ( 
                  <input
                    className="session_button demo"
                    type="submit"
                    value={"DEMO USER"}
                    onClick={() => this.props.openModal("Log in")}
                  />
             )} 
          </div>

            

          {/* <div className="or">OR</div>

          <a href="https://www.facebook.com/" className="fbbutton">
            <i className="fab fa-facebook"></i>
            Continue with Facebook
          </a>

          <a href="https://www.gmail.com/" className="ggbutton">
            <img
              className="google_button"
              src="https://img.icons8.com/color/20/000000/google-logo.png"
            ></img>
            Continue with Google
          </a> */}
          <div className="session_dummy"></div>

          <div>
            {this.props.formType !== "Log in" ? (
              <button
                className="navlink"
                onClick={() => this.props.openModal("Log in")}
              >
                {/* {" "} */}
                Already a member? Log in
              </button>
            ) : (
              <button
                className="navlink"
                onClick={() => this.props.openModal("Sign up")}>
                {/* {" "} */}
                Not on Pinterest yet? Sign Up
              </button>
            )}
          </div>
          <div className="session_errors">{this.renderErrors()}</div>

        </form>
      </div>



      </div>
    );
  }
}
  export default SessionForm;

