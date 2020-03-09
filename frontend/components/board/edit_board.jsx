import React from 'react';

export default class EditBoardForm extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     title: '',
        //     body: ''
        // };
        this.state = this.props.board
        this.handleSubmit = this.handleSubmit.bind(this)
        this.update = this.update.bind(this)
        // this.renderErrors = this.renderErrors.bind(this)
        
    }
    componentDidMount() {
        
        this.props.fetchBoard(this.props.boardId)

    }
    handleSubmit(e) {
        e.preventDefault(),
            this.props.updateBoard(this.state).then(this.props.closeModal)
    }
    update(v) {
        return (e) => this.setState({ [v]: e.target.value })
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
    
    render() {
        const { board, currentUser, errors, updateBoard, openModal, closeModal} = this.props
        if (!board) return null;
        if (!errors) return null;
        return (
            
                <div>
                    <div className="all_board">

                        <form className="boardform" onSubmit={this.handleSubmit}>
                            <div className="titlecreateForm">Edit BoardAAAAAAAA</div>
                            <div >
                                {/* <input className="inputCreateBoard" type="text" placeholder="Topic" /> */}
                                <input className="inputCreateBoard" type="text" value={this.state.title} onChange={this.update('title')}  />
                            </div>
                            <div >
                                {/* <input className="inputCreateBoard" type="text"  placeholder="Description" /> */}
                                <input className="inputCreateBoard" type="text" value={this.state.body} onChange={this.update('body')} />
                            </div>
                            <div className="errorInBoardForm">
                                {this.renderErrors()}
                            </div>
                            <div className="create-group-btton">
                                <button className='canclebutton' onClick={this.props.closeModal}>Cancle</button>
                                <input className='createbutton' type="submit" value="Update" />
                            </div>

                        </form>

                    </div>
                </div>
        )
    }
}

