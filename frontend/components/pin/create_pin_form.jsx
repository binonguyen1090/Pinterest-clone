import React from 'react';
import { Link } from 'react-router-dom';
export default class PinCreateForm extends React.Component {
    constructor(props) {
        // debugger
        super(props); 
        this.state = {
            title: '',
            body: '',
            board_id: '',
            photoFile: null
            // boardId: "",

        };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleFile = this.handleFile.bind(this)
        // this.state = this.props.pins
        this.update = this.update.bind(this)
        this.renderErrors = this.renderErrors.bind(this)

    }
    update(v) {
        return (e) => this.setState({ [v]: e.target.value })
    }
    handleFile(e){
        debugger
        this.setState({photoFile: e.currentTarget.files[0]})
        // e.preventDefault()

    }


    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('pin[title]', this.state.title);
        formData.append('pin[body]', this.state.body);
        formData.append('pin[photo]', this.state.photoFile); 
        formData.append('pin[board_id]', this.state.board_id);
        $.ajax({
            url: '/api/pins',
            method: 'POST',
            data: formData,
            contentType: false,
            processData: false
        }).then(this.props.closeModal)
    }
    


    componentDidMount() {
        // debugger
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
        // debugger 
        console.log(this.state)
        if (!this.props.errors) {
            return []
        }

        const boardChoice = this.props.boards.map((board, i) => {
            return (
                <option value={board.id} key={i}> {board.title},{board.id}{board.photo} </option>
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
                        <div>
                            <input type="file" onChange={this.handleFile}/>
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

// Result
// EDIT ON
//     < nav role = "navigation" >
//         <ul>
//             <li><a href="#">One</a></li>
//             <li><a href="#">Two</a>
//                 <ul class="dropdown">
//                     <li><a href="#">Sub-1</a></li>
//                     <li><a href="#">Sub-2</a></li>
//                     <li><a href="#">Sub-3</a></li>
//                 </ul>
//             </li>
//             <li><a href="#">Three</a></li>
//         </ul>
// </nav >