import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

//This compoenent will render a length-wise jumbotron components with custom props
export const Jumbo = (props) => {
    return(
        <Jumbotron>
            <h1>{props.title}</h1>
        </Jumbotron>
    )
}