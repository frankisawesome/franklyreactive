import React from 'react';
import LazyHero from 'react-lazy-hero';
import img from '../../images/hero.jpg';
import '../../css/Hero.css'

export const Hero = (props) => {
    return(
        <LazyHero imageSrc={img}
        opacity={0.4}
        className="hero"
        color="#A7886A"
        >
            <h1>Acid Reflux is a Bitch</h1>
        </LazyHero>
    )
}