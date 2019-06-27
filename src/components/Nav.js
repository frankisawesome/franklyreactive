import React from 'react';
//Additional coponent imports
import { LinkContainer } from 'react-router-bootstrap'; 
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

//My components
import '../css/Nav.css'

//Make Link components using prop items' names and paths in a Nav component
//Uses react-router-bootstrap for routing
export const Navbar = (props) => {
    return (
        <Nav>
            {props.items.map((item, ind) => (
                <Nav.Item>
                    <Link className="nav-link" to={item.path} eventKey={ind}>{item.name}</Link>
                </Nav.Item>
            ))}
        </Nav>
    );
}
