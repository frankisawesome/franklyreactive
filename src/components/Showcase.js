import React from 'react';
import '../css/showcase.css';

//React bootstrap imports
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup'


//Displays a rounded image, a heading and some text.
export const Showcase = (props) => {
    return (
        <Container>
            <Row>
                <Col xs={12} md={6}>
                    <Image src={props.image} roundedCircle />
                    <h2>{props.heading}</h2>
                </Col>
                <Col xs={12} md={6} className="stuff-right">
                    <ListGroup variant="flush">
                        {props.attributes.map((attr) => (
                            <ListGroup.Item>{attr}</ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}