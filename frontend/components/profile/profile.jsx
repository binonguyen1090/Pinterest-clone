

import React from 'react';
import { Link } from 'react-router-dom';
import BoardIndexContainer from '../board/board_index_container'
export default class Profile extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="board">
                <div className="topboard">
                    <div className="profile-button">
                        <button
                            className="splashsignin"
                            onClick={() => this.props.openModal("Create Board")}>
                            <p className="navcontentlongin">Create Board</p>
                        </button>
                        <Link to={`/settings`} className="fa-pen-profile" ><i className="fas fa-pen "></i></Link>
                

                        
                    </div>
                    <div className="info-profile">
                        Name , age
                    </div>
                    <div className="link-on-profile">
                        <div>Boards</div>
                        <div>Pins</div>
                    </div>
                    
                </div>

                <div className="bottomboard">
                    <BoardIndexContainer />
                </div>
            </div>
        )
    }

};
