import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

//Make Link components using prop items' names and paths in a Nav component
//Uses react-router-bootstrap for routing
export const Navbar = (props) => {
    return (
        <Nav>
            {props.items.map((item, ind) => (
                <LinkContainer to={item.path}>
                    <Nav.Item eventKey={ind}>
                        <Nav.Link>{item.name}</Nav.Link>
                    </Nav.Item>
                </LinkContainer>
            ))}
        </Nav>
    );
}