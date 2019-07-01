import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GoMarkGithub } from "react-icons/go";

import '../../css/project.css';


export const Project = (props) => {
    return (
        <div>
            <Jumbotron className="projtron">
                <Row>
                    <Col xs={12} md={6}>
                        <h1>{props.title}</h1>
                        <p>{props.subtext}</p>
                        <Button variant="warning" href={props.url}>Learn More</Button>
                        <a className="github" href="https://github.com/frankisawesome/CosmosPointSix"><GoMarkGithub /></a>
                    </Col>
                    <Col xs={12} md={6}>
                        <a href={props.url}><Image rounded src={props.src}/></a>
                    </Col>
                </Row>

            </Jumbotron>
            <Carousel className="projslides">
                {props.slides.map((slide) => (
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slide.src}
                            alt={slide.title}
                        />
                        <Carousel.Caption>
                            <h3>{slide.label}</h3>
                            <p>{slide.caption}</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                ))}
            </Carousel>
        </div>
    )
}