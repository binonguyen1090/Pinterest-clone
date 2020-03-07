
// import React from 'react';
// import { Link } from 'react-router-dom';

// /*
// Write an `EventShow` presentational component that renders an event's 
// information (description and date). This component should receive the event  
// from the store as props via its container and fetch it once it has successfully
// mounted to the DOM. Additionally, this component should contain a link back to 
// the `EventIndex`.
// */
// export default class BoardShow extends React.Component {
//     componentDidMount() {
//         this.props.fetchBoard(this.props.match.params.boardId)
//     }
//     render() {
//         return (
//             <li>
//                 {this.props.board.title}
//                 {/* {this.props.event.date} */}
//                 {/* <Link to={`/`}>EventIndex</Link> */}
//             </li>
//         )
//     }
// }