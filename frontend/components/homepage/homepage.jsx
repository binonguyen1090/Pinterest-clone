import React from 'react';
import { Link } from 'react-router-dom';
// import AllUsersPins from '../../components/pin/all_pins'
import AllPinsContainer from '../pin/all_pins_container'

export default class HomePage extends React.Component {
    constructor(props){
        super(props);
    }

    render (){
        return(

            <div className="homepage">
                <h2 className="textinsplash">hello again</h2>
            </div>
        ) 
    }
}