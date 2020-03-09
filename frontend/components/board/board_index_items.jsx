import React from 'react';
import { Link } from 'react-router-dom';

export default class BoardIndexItem extends React.Component {
    constructor(props){
        super(props);
    };

    render() {
        let editButton;
        if (this.props.currentUserId === this.props.user.id) {
            editButton = <button
                className="splashsignin"
                onClick={() => this.props.openModal("Edit Board", this.props.board.id)} >
                <p className="navcontentlongin">Edit Board</p>
            </button>
        }else {
            editButton = null
        }

        const { board , idx} = this.props;
        return (
          
            <div className="box-index-items">
                {board.title} <br/>
                {board.body} <br/>
                {editButton}
            </div>
        )
    }
};
// import React from 'react';
// import { Link } from 'react-router-dom';

// export default class BoardIndexItem extends React.Component {
//     constructor(props){
//         super(props);
//     };

//     render() {
//         let editButton;
//         if (this.props.board.user_id === this.props.currentUser.id) {
//             editButton = <button
//                 className="splashsignin"
//                 onClick={() => this.props.openModal("Edit Board", this.props.board.id)}
//             >
//                 <p className="navcontentlongin">Edit Board</p>
//             </button>
//         }
//         else {
//             editButton = null
//         }

//         const { board , idx} = this.props;
//         return (
          
//             <div className="box-index-items">
//                 {board.title} <br/>
//                 {board.body} <br/>
//                 {/* {board.id} <br/> */}
//                 {editButton}
               
//             </div>
//         )
//     }
// };

