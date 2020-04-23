import React from 'react';
import AllPinsIndexItem from "../pin/all_pins_index_item";
import { Link } from 'react-router-dom';

export default class Results extends React.Component {
    constructor(props) {
        super(props);
        
    }

    componentWillUnmount() {
        this.props.clearSearch();
    }

    render() {
        
        return (
          // <h1>This is from SEARCH RESULT</h1>
          <div className="results">
            <h1>{this.props.search.length} result(s) for your search</h1>
            <ul className="masonry" >
              {this.props.search.map((pin, idx) => (
                <AllPinsIndexItem
                  pinId={pin.id}
                  key={idx}
                  pin={pin}
                  src={pin.photoUrl}
                  boardId={pin.board_id}
                  openModal={this.props.openModal}
                />
              ))}
            </ul>
          </div>
        );
    }
}
{/* <div className="masonry">
  {loader}
  <AllPinsContainer />
</div>; */}