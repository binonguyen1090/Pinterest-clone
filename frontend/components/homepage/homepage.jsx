import React from "react";
import AllPinsContainer from "../pin/all_pins_container";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
      this.props.startLoading();
      setTimeout(() => this.props.stopLoading(), 4000);
  }

  render() {
    const loader = this.props.loading ? (
      <div className="loading-background">
        <div className="loading"></div>
      </div>
    ) : null;
    return (
      <div className="masonry">
        {loader}
        <AllPinsContainer />
      </div>
    );
  }
}
