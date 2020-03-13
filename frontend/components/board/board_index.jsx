import React from 'react';
import { Link } from 'react-router-dom';
import BoardShow from './board_show'
import BoardIndexItem from './board_index_items'


export default class BoardIndex extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.fetchBoards(this.props.user.id); 
    }
    componentDidUpdate(prevProps) {
        if (prevProps.user.id != this.props.user.id) {
            this.props.fetchBoards(this.props.user.id);
        }
    }

    render() {
        if  (!this.props.boards){
            return null
        }
        if (!this.props.user) {
            return null;
        }
        const { boards, deleteBoard, currentUser, openModal, closeModal} = this.props

        return (
            <div>
                <div >
                <ul className="box-index-items-container">
                    {
                        boards.map((board, idx) =>
                        <BoardIndexItem 
                            key={idx}
                            board={board}
                            deleteBoard={this.props.deleteBoard}
                            openModal={this.props.openModal} 
                            currentUserId={this.props.currentUserId}
                            user={this.props.user}
                        />)
                    }
                </ul>
                </div>
            </div>
        )
    }
}
// import React from 'react';
// import { Link } from 'react-router-dom';
// import BoardShow from './board_show'
// import BoardIndexItem from './board_index_items'
// /*
// Export an `EventIndex` presentational component that renders a list (`ul`) of
// `EventIndexItems`. This component should receive `events` from the store as a 
// prop via its container and fetch them once it has successfully mounted to the 
// DOM. Below the `ul`, add a link to the new event page with text 'New Event'.
// */

// export default class BoardIndex extends React.Component {
//     constructor(props){
//         super(props);
//     }

//     componentDidMount() {
//         this.props.fetchBoards(this.props.currentUser.id);
//     }

//     render() {
//         if  (!this.props.boards){
//             return null
//         }
//         const { boards, deleteBoard, currentUser, openModal, closeModal} = this.props

//         return (
//             <div>
//                 This is from Board_Index_Component
//                 <ul>
//                     {boards.map((board, idx) => <BoardIndexItem openModal={this.props.openModal} 
//                     board={board} currentUser={this.props.currentUser}
//                      deleteBoard={this.props.deleteBoard} key={idx}/> )}
//                 </ul>
                
//             </div>
//         )
//     }
// }
