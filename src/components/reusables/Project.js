import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import '../../css/project.css'

export const Project = (props) => {
    return (
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
    )
}