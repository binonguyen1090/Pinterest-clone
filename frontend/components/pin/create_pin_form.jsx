import React from 'react';
import { Link } from 'react-router-dom';
export default class PinCreateForm extends React.Component {
    constructor(props) {
        debugger
        super(props);
        this.state = {
            title: '',
            body: '',
            board_id: '',
            // boardId: "",

        };
        this.handleSubmit = this.handleSubmit.bind(this)
        // this.state = this.props.pins
        this.update = this.update.bind(this)
        this.renderErrors = this.renderErrors.bind(this)

    }
    update(v) {
        return (e) => this.setState({ [v]: e.target.value })
    }
    
    handleSubmit(e) {
        e.preventDefault(),
            this.props.createPin(this.state).then(this.props.closeModal)
    }
    componentDidMount() {
        debugger
        this.props.fetchBoards(this.props.currentUser.id);
        // this.props.fetchPins(this.props.currentUser.id);

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
        debugger
        if (!this.props.errors) {
            return []
        }

        const boardChoice = this.props.boards.map((board, i) => {
            return (
                <option value={board.id} key={i}> {board.title},{board.id} </option>
            );
        });  
        return (
            <div>
                
                <div className="all_board">

                    <form className="boardform" onSubmit={this.handleSubmit}>
                        <div className="titlecreateForm">Create Pin</div>
                        <div >
                            <input className="inputCreateBoard" type="text" value={this.state.title} onChange={this.update('title')} placeholder="Topic" />
                        </div>
                        <div >
                            <input className="inputCreateBoard" type="text" value={this.state.body} onChange={this.update('body')} placeholder="Description" />
                        </div>
                        <div >
                            <input className="inputCreateBoard" type="text" value={this.state.board_id} onChange={this.update('board_id')} placeholder="board_id" />
                        </div>
                        
                        <div className="create-group-btton">
                            <button className='canclebutton' onClick={this.props.closeModal}>Cancle</button>
                            <input className='createbutton' type="submit" value="Create" />
                        </div>
                        <div>
                            <ul>
                                {boardChoice}
                            </ul>
                        </div>

                    </form>

                </div>
            </div>
        )
    }
}

