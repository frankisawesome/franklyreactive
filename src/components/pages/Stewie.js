import React, { useState } from 'react';
import Gallery from 'react-grid-gallery';
import '../../css/gallery.css'


export const Stewie = () => {
    return (
        <div>
                <h3>Stewie the cat</h3>
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