import React from 'react';
import { Link } from 'react-router-dom';
export default class BoardForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        // this.state = this.props.board
        // this.update = this.update.bind(this)
        // this.renderErrors = this.renderErrors.bind(this)
        
    }
    update(v) {
        return (e) => this.setState({ [v]: e.target.value })
    }
    handleSubmit(e) {
        e.preventDefault(),
            this.props.createBoard(this.state).then(this.props.closeModal)
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
        if (!this.props.errors) {
            return []
        }
        return (
            <div> 
                <div className="all_board">

                    <form className="boardform" onSubmit={this.handleSubmit}>
                        <div className="titlecreateForm">Create Board</div>
                        <div >                      
                            <input className="inputCreateBoard" type="text" value={this.state.title} onChange={this.update('title')} placeholder="Topic"/>
                        </div>
                        <div >
                            <input className="inputCreateBoard" type="text" value={this.state.body} onChange={this.update('body')} placeholder="Description" />
                        </div>
                        <div className="errorInBoardForm">
                            {this.renderErrors()}
                        </div>
                        <div className="create-group-btton">
                            <button className='canclebutton' onClick={this.props.closeModal}>Cancle</button>    
                            <input className='createbutton' type="submit" value="Create" />
                        </div>                    
                        
                    </form> 

                </div>
            </div>
        )
    }
}

