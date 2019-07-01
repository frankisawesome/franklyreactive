import React from 'react';
import LazyHero from 'react-lazy-hero';

//Importing my stuff here
import img from '../../images/proj.jpg';
import '../../css/Hero.css';
import { Project } from '../reusables/Project';
import cosmos from '../../images/cosmos.jpg'

//Slide images
import slide1 from '../../images/slide1.png';
import slide2 from '../../images/slide2.png';
import slide3 from '../../images/slide3.png';
import slide4 from '../../images/slide4.png';
import slide5 from '../../images/slide5.png';

export const Proj = () => {
    return (
        <div>
            <LazyHero imageSrc={img}
                opacity={0.4}
                className="hero"
                color='#A2AEA3'>
                    <h1>Dream Big.</h1>
            </LazyHero>
            <Project {...projProps} />
        </div>
    )
}

//Props for the slides
const projProps = {
    slides: [
        {
            title: 'Cosmos Point Six',
            label: 'MERN stack',
            caption: 'Simple demo of every piece of technology.',
            src: slide1
        },
        {
            title: 'Cosmos Point Six',
            label: 'Mono-repo',
            caption: 'Deployed via Heroku Dyno free tier',
            src: slide2
        },
        {
            title: 'Cosmos Point Six',
            label: 'React front-end',
            caption: 'Use of multiple libraries and bootstrap',
            src: slide3
        },
        {
            title: 'Cosmos Point Six',
            label: 'Node/Express back-end',
            caption: 'Mongoose module for DB queries',
            src: slide4
        },
        {
            title: 'Cosmos Point Six',
            label: 'CosmosDB Mongo API',
            caption: 'Configured on Azure free tier',
            src: slide5
        }
    ],
    title: "Cosmos Point Six",
    subtext: "A Full-Stack Tech Demo Project. Hosted using Heroku Dyno, express-node backend also serving the react frontend. CosmosDB cloud database solution used.",
    src: cosmos,
    url: 'https://cosmos-point-six.herokuapp.com'
}