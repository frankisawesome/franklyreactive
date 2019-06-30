import React, { useState } from 'react';

//Internal imports
import img from '../../images/hero.jpg';
import '../../css/Hero.css';
import Typing from 'react-typing-animation';

//Libraries
import LazyHero from 'react-lazy-hero';
import FormControl from 'react-bootstrap/FormControl'

export const Hero = () => {
    const [message, setMessage] = useState("Be your own inspiration");
    const [finished, setFinished] = useState(false);

    return (
        <LazyHero imageSrc={img}
            opacity={0.4}
            className="hero"
            color="#A7886A"
        >
            {finished ? <h1>{message}</h1> : null}
            {finished ? null :
                <Typing
                    onFinishedTyping={() => setFinished(true)}
                    hideCursor={true}>
                    <h1>{message}</h1>
                </Typing>}
            <FormControl
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="input"
            />
        </LazyHero>
    )
}