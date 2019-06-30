import React, { useState } from 'react';

//Internal imports
import img from '../../images/hero.jpg';
import '../../css/Hero.css'

//Libraries
import LazyHero from 'react-lazy-hero';
import FormControl from 'react-bootstrap/FormControl'

export const Hero = (props) => {
    const [message, setMessage] = useState("Write your own inspiration");

    return (
        <LazyHero imageSrc={img}
            opacity={0.4}
            className="hero"
            color="#A7886A"
        >
            <h1>{message}</h1>
            <FormControl
                value = {message}
                onChange = {(e) => setMessage(e.target.value)}
                className="input"
            />
        </LazyHero>
    )
}