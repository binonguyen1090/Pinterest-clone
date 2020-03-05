import React from 'react';
import { Link } from 'react-router-dom';


export default class HomePage extends React.Component {
    constructor(props){
        super(props);
    }

    render (){
        return(
            <h1>This is from homepage Container</h1>
        )
    }
}