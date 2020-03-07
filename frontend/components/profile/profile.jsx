

import React from 'react';
import { Link } from 'react-router-dom';
import BoardIndexComponent from '../board/board_index'
export default class Profile extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="board">
                <div className="topboard">
                    <button
                        className="splashsignin"
                        onClick={() => this.props.openModal("Create Board")}
                    >
                        <p className="navcontentlongin">Create Board</p>
                    </button>
                    <div className="profile">This is Hello from Profile Component</div>
                </div>

                <div className="bottomboard">
                    <BoardIndexComponent />
                </div>
            </div>
        )
    }

};
