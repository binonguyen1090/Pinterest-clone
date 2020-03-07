

import React from 'react';
import { Link } from 'react-router-dom';
import BoardIndexComponent from '../board/board_index'
export default class Profile extends React.Component {
    render() {
        return (
            <div className="board">
                <div className="topboard">
                    <button>
                        <Link to="/boards/new">Create Board</Link>
                    </button><br/><br/>
                    <div className="profile">This is Hello from Profile Component</div>
                </div>

                <div className="bottomboard">
                    <BoardIndexComponent />
                </div>
            </div>
        )
    }

};
