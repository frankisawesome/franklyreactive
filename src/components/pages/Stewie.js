import React from 'react';
import Gallery from 'react-grid-gallery';
import '../../css/gallery.css'

import img from '../../images/stewiebig.jpg'

import LazyHero from 'react-lazy-hero';


export const Stewie = () => {
    return (
        <div>
                <LazyHero imageSrc={img}
                opacity={0.4}
                className="hero"
                color='#A7886A'>
                    <h1>Stewie the cat.</h1>
            </LazyHero>
                <Gallery images={images}/>
        </div>
    )
}

const images = [
    {
        src: 'https://i.imgur.com/8vkcKhU.jpg',
        thumbnail: 'https://i.imgur.com/8vkcKhU.jpg'
    },
    {
        src: 'https://i.imgur.com/VmVYrPJ.jpg',
        thumbnail: 'https://i.imgur.com/VmVYrPJ.jpg'
    },
    {
        src: 'https://i.imgur.com/sJvPWiy.jpg',
        thumbnail: 'https://i.imgur.com/sJvPWiy.jpg'
    },
    {
        src: 'https://i.imgur.com/rKmEGqP.jpg',
        thumbnail: 'https://i.imgur.com/rKmEGqP.jpg'
    },
    {
        src: 'https://i.imgur.com/p2vXWYc.jpg',
        thumbnail: 'https://i.imgur.com/p2vXWYc.jpg'
    },
    {
        src: 'https://i.imgur.com/1hFnYBr.jpg',
        thumbnail: 'https://i.imgur.com/1hFnYBr.jpg'
    },
    {
        src: 'https://i.imgur.com/RlUDJ1d.jpg',
        thumbnail: 'https://i.imgur.com/RlUDJ1d.jpg'
    },
    {
        src: 'https://i.imgur.com/09VVulg.jpg',
        thumbnail: 'https://i.imgur.com/09VVulg.jpg'
    },
    {
        src: 'https://i.imgur.com/rPyQ4t0.jpg',
        thumbnail: 'https://i.imgur.com/rPyQ4t0.jpg'
    },
    {
        src: 'https://i.imgur.com/PRCw9fk.jpg',
        thumbnail: 'https://i.imgur.com/PRCw9fk.jpg'
    },
]