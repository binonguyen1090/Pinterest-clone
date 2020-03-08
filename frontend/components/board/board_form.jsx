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
                        <div className="errorInBoardForm">Create Board</div>
                        <div className='errorInBoardForm' onClick={this.props.closeModal}>X</div>
                        <label> Topic
                            <div>
                                <input type="text" value={this.state.title} onChange={this.update('title')} placeholder="Topic"/>
                            </div>
                        </label>
                        <label> Topic
                            <div>
                                <input type="text" value={this.state.body} onChange={this.update('body')} placeholder="Description" />
                            </div>
                        </label>

                        <div>
                            <input type="submit" value="Create" />
                            {/* <Link to={`/users/${currentUser.id}`}>Cancel</Link>                        </div> */}
                        </div>
                        <div className="errorInBoardForm">
                            {this.renderErrors()}
                        </div>
                    </form> 
                
                </div>
            </div>
        )
    }
}

