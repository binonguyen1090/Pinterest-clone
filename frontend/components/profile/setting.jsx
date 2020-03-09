import React from 'react';

export default class ProfileSetting extends React.Component {
    constructor(props) {
        // debugger
        
        super(props);
        this.state = {
            id: props.userId,
            email: props.user.email || '',
            fname: props.user.fname || '',
            lname: props.user.lname || '',
            description: props.user.description || '' ,
            location: props.user.location || '',
            
        }
        // this.state = this.props.board
        this.handleSubmit = this.handleSubmit.bind(this)
        this.update = this.update.bind(this)
        // this.deleteBoard = this.deleteBoard.bind(this)
        // this.renderErrors = this.renderErrors.bind(this)

    }
    // componentDidMount() {
    //     // debugger
    //     this.props.fetchBoard(this.props.board.id)

    // }
    handleSubmit(e) {
        e.preventDefault();
        this.props.updateUser(this.state)
            .then(this.props.history.push(`/users/${this.state.id}`))
    }
    update(v) {
        return (e) => this.setState({ [v]: e.target.value })
    }
    // deleteBoard(e) {
    //     // debugger
    //     e.preventDefault(),
    //         this.props.closeModal()
    //     this.props.deleteBoard(this.props.boardId)
    // }

    // renderErrors() {
    //     return (
    //         <ul>
    //             {this.props.errors.map((error, idx) => (
    //                 <li key={idx}>{error}</li>
    //             ))}
    //         </ul>
    //     );
    // }

    render() {
        // debugger
        // debugger
        // const { board, currentUser, errors, updateBoard, openModal, closeModal } = this.props
        // if (!board) return null;
        // if (this.props.errors) return null;
        return (

                
            <div className="setting">
                <div className="left-setting">
                    <h1>Edit Profile</h1>
                    <h1>Claim</h1>
                    <h1>Notifications</h1>
                    <h1>Privacy and data</h1>
                    <h1>Security</h1>
                    <h1>Apps</h1>
                </div>
                <div className="right-setting">
                    <form onSubmit={this.handleSubmit}> 
                        <h1>Edit profile</h1>
                        <p>People on Pinterest will get to know you with the info below</p>

                        <ul className="form-style-1">
                            <li>
                                <label>Full Name <span className="required">*</span></label>
                                <input type="text" name="field1" className="field-divided" value={this.state.fname} onChange={this.update('fname')} placeholder="First" /> <input type="text" name="field2" className="field-divided" value={this.state.lname} onChange={this.update('lname')} placeholder="Last" />
                            </li>

                            
                        
                            <li>
                                <label>Location <span className="required">*</span></label>
                                <input type="text" className="field3" className="field-long" value={this.state.location} onChange={this.update('location')}/>
                            </li>

                            <li>
                                <label>Your Message <span className="required">*</span></label>
                            <input type="text" className="field3" className="field-long" value={this.state.description} onChange={this.update('description')} />
                            </li>
                            {/* {this.renderErrors()} */}
                            <li>
                                <input type="submit" value="Submit" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        )
    }
}









{/* <form className="boardform" onSubmit={this.handleSubmit}>
    <div className="titlecreateForm">Edit Profile</div>
    <div >
        Name
                            <input className="inputCreateBoard" type="text" value={this.state.email} onChange={this.update('title')} />
    </div>
    <div >
        <input className="inputCreateBoard" type="text" value={this.state.fname} onChange={this.update('body')} />
    </div>
    <div >
        <input className="inputCreateBoard" type="text" value={this.state.lname} onChange={this.update('body')} />
    </div>
    <div >
        <input className="inputCreateBoard" type="text" value={this.state.description} onChange={this.update('body')} />
    </div>
    <div >
        <input className="inputCreateBoard" type="text" value={this.state.location} onChange={this.update('body')} />
    </div>
    {/* <div className="errorInBoardForm">
                            {this.renderErrors()}
                        </div> */}

    // <div className="delete-edit-button">
    //     {/* <div>
    //                             <button className='delete-board' onClick={this.deleteBoard}><i className="fas fa-trash-alt"></i>
    //                             </button>
    //                         </div> */}

    //     <div className="create-group-btton">
    //         <button className='canclebutton'>Cancle</button>
    //         <input className='createbutton' type="submit" value="Update" />
    //     </div>
    // </div>

// </form> */}
