import React from 'react';
import LazyHero from 'react-lazy-hero';
import img from '../../images/proj.jpg'
import '../../css/Hero.css'

export const Proj = () => {
    return (
        <div>
            <LazyHero imageSrc={img}
                opacity={0.4}
                className="hero"
                color='#A2AEA3'>
                    <h1>Dream Big.</h1>
            </LazyHero>
        </div>
    )
}