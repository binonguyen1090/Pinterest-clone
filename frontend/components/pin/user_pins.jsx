

import React from 'react';
import { Link } from 'react-router-dom';
import BoardIndexContainer from '../board/board_index_container'
export default class UserPins extends React.Component {
    constructor(props) {
        debugger
        super(props);
    }
    componentDidMount() {
        debugger
        this.props.fetchOneUserPins(this.props.currentUser.id);
        // this.props.fetchPins(this.props.currentUser.id);

    }
    
    render() {
        let userPins = this.props.pins.map((pin,i) => {
            return (
                <option value={pin.id} key={i}> {pin.title}</option>
            )
        })
        debugger

        // let id = this.props.match.params.userId 
        // let user = this.props.currentUser
        // let name = (user.fname === null || user.lname === null) ? (user.email) : (user.fname + " " + user.lname)
        // let location = (user.location === null) ? "" : (user.location)
        return (
            <div className="board">
                <ul>
                    {userPins}
                </ul>
            </div>
        )
    }

};
