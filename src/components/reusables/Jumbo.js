import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import '../../css/jumbo.css';

//A jumbontron component with a title, a subtext, and a button.
export const Jumbo = (props) => {
    return(
        <Jumbotron>
            <h1>{props.title}</h1>
            <div className="textblock"><p>{props.subtext}</p></div>
            <Button variant="outline-secondary" href={props.buttonLink}>{props.buttonText}</Button>
        </Jumbotron>
    )
}