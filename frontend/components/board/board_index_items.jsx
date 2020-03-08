import React from 'react';
import { Link } from 'react-router-dom';

/*
Export an `EventIndexItem` presentational component that takes in an `event`
and the `deleteEvent` action via props. The component should render an `li`
containing the following:

1. A link to the event's show page with text of the event's description
2. A link to the event's edit page with text 'Edit'.
3. A button to delete the event.
*/
export default class BoardIndexItem extends React.Component {
    constructor(props){
        super(props);
    };

    render() {
        const { board , idx} = this.props;
        return (
            // <li>
            //     <Link to={`/events/${this.props.event.id}`}>{this.props.event.description}</Link>
            //     <Link to={`/events/${this.props.event.id}/edit`}>Edit</Link>
            //     <button onClick={() => this.props.deleteEvent(this.props.event.id)}>Delete</button>
            // </li>
            <div className="box-index-items">
                {board.title}
                {board.body}
                {board.id}
                <button>Edit</button>
                <button
                    className="splashsignin"
                    onClick={() => this.props.openModal("Edit Board")}
                >
                </button>
            </div>
        )
    }
};

