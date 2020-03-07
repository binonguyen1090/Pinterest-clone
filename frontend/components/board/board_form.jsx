// import React from 'react';

// export default class BoardForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = this.props.board
//         this.handleSubmit = this.handleSubmit.bind(this)
//         this.update = this.update.bind(this)
//     }
//     handleSubmit(e) {
//         e.preventDefault(),
//             this.props.createBoard(this.state)
//     }
//     update(v) {
//         return (e) => this.setState({ [v]: e.target.value })
//     }

//     componentDidMount(){
//         this.props.createBoard(board)
//     }
//     render() {
//         return (
//             <div>
//                 {/* <h1>{this.props.formType}</h1> */}
//                 <form onSubmit={this.handleSubmit}>

//                     <input type="date" value={this.state.title} onChange={this.update('title')} />
//                     <input type="text" value={this.state.body} onChange={this.update('body')} />
//                     <input type="submit" value="Create Board" />
//                 </form>
//             </div>
//         )
//     }
// }

import React from 'react';

const CreateBoard = (props) => {
    if (props.boards.length < 1 && props.currentUserId === parseInt(props.match.params.userId)) {
        return (
            <>
                <div className="create-board-page">
                    <div className="create-board-square">
                        <div className="create-small-square">
                            <button onClick={() => props.openModal('boardform')} className="red-plus"> + </button>
                        </div>
                        <h2 className="create-board-h1">Create a board</h2>
                    </div>
                </div>
            </>
        )
    }
    else {
        return null
    }
}

export default CreateBoard;